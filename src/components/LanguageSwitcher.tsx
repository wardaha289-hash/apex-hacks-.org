import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
] as const

type LangCode = (typeof LANGUAGES)[number]['code']

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: { translate?: { TranslateElement: new (opts: object, id: string) => unknown } }
  }
}

function readLang(): LangCode {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/)
  const code = match ? decodeURIComponent(match[1]) : 'en'
  return (LANGUAGES.find((l) => l.code === code)?.code ?? 'en') as LangCode
}

function writeLang(code: LangCode) {
  const host = window.location.hostname
  const domains = ['', host, `.${host.split('.').slice(-2).join('.')}`]
  for (const d of domains) {
    const domainAttr = d ? `; domain=${d}` : ''
    if (code === 'en') {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}`
    } else {
      document.cookie = `googtrans=/en/${code}; path=/${domainAttr}`
    }
  }
}

function loadTranslator() {
  if (document.getElementById('google-translate-script')) return
  const holder = document.createElement('div')
  holder.id = 'google_translate_element'
  holder.style.display = 'none'
  document.body.appendChild(holder)
  window.googleTranslateElementInit = () => {
    if (!window.google?.translate) return
    new window.google.translate.TranslateElement(
      { pageLanguage: 'en', autoDisplay: false },
      'google_translate_element',
    )
  }
  const script = document.createElement('script')
  script.id = 'google-translate-script'
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.body.appendChild(script)
}

type LanguageSwitcherProps = {
  variant?: 'chip' | 'menu'
}

export function LanguageSwitcher({ variant = 'chip' }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<LangCode>('en')
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = readLang()
    setLang(current)
    if (current !== 'en') loadTranslator()
  }, [])

  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(code: LangCode) {
    setOpen(false)
    if (code === lang) return
    writeLang(code)
    window.location.reload()
  }

  const short = lang === 'zh-CN' ? 'ZH' : lang.toUpperCase()

  const triggerClass =
    variant === 'chip'
      ? 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm xl:px-3.5 font-medium text-z-ink/70 transition-colors hover:bg-z-accent/15 hover:text-z-ink'
      : 'flex w-full items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-z-ink/80 transition-all hover:bg-z-accent/15 hover:text-z-ink'

  const panelClass =
    variant === 'chip'
      ? 'nav-chip absolute left-1/2 top-[calc(100%+0.6rem)] z-50 max-h-80 w-44 -translate-x-1/2 overflow-y-auto rounded-2xl p-1.5'
      : 'mt-1 max-h-64 overflow-y-auto rounded-xl border border-z-soft/20 bg-z-bg/60 p-1.5'

  return (
    <div ref={rootRef} className="notranslate relative" translate="no">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
        className={triggerClass}
      >
        <Globe className="h-4 w-4" aria-hidden />
        {variant === 'chip' ? short : 'Language'}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''} ${variant === 'menu' ? 'ml-auto' : ''}`}
          aria-hidden
        />
      </button>
      {open ? (
        <ul role="listbox" aria-label="Language" className={panelClass}>
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => choose(l.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-z-accent/15 hover:text-z-ink ${
                  l.code === lang ? 'bg-z-accent/15 text-z-ink' : 'text-z-ink/70'
                }`}
              >
                {l.label}
                {l.code === lang ? <Check className="h-3.5 w-3.5" aria-hidden /> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
