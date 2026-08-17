"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "smartflow-cookie-consent";

function saveConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("smartflow-consent-updated", { detail: consent }));
}

const noopSubscribe = () => () => {};

// No consent stored yet → banner should show. useSyncExternalStore keeps this
// read of an external system (localStorage) out of an effect/setState pair.
function useHasStoredConsent() {
  return useSyncExternalStore(
    noopSubscribe,
    () => localStorage.getItem(STORAGE_KEY) !== null,
    () => true
  );
}

export function CookieBanner() {
  const hasStoredConsent = useHasStoredConsent();
  const [dismissed, setDismissed] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (hasStoredConsent || dismissed) return null;

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
    setDismissed(true);
  };

  const rejectNonEssential = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
    setDismissed(true);
  };

  const savePreferences = () => {
    saveConsent({ essential: true, analytics, marketing });
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Настройки cookie"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <Container className="!px-0 sm:!px-0 max-w-3xl">
        <div className="rounded-2xl border border-line bg-white/95 p-5 shadow-[var(--shadow-card-hover)] backdrop-blur-md sm:p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            Мы используем cookie, чтобы сайт работал корректно и мы могли улучшать его на основе
            статистики использования. Вы можете принять все cookie, отклонить необязательные или
            настроить их самостоятельно. Подробнее — в{" "}
            <Link href="/cookie-policy" className="font-medium text-ink underline underline-offset-2">
              Cookie Policy
            </Link>
            .
          </p>

          {manageOpen && (
            <div className="mt-4 space-y-3 rounded-xl border border-line bg-mist p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">Необходимые</p>
                  <p className="text-xs text-ink-soft">Всегда включены — нужны для работы сайта.</p>
                </div>
                <input type="checkbox" checked disabled className="size-4 accent-blue" aria-label="Необходимые cookie, всегда включены" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">Аналитика</p>
                  <p className="text-xs text-ink-soft">Помогает понять, как посетители используют сайт.</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="size-4 accent-blue"
                  aria-label="Аналитические cookie"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">Маркетинг</p>
                  <p className="text-xs text-ink-soft">Используется для релевантной рекламы.</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="size-4 accent-blue"
                  aria-label="Маркетинговые cookie"
                />
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={acceptAll}
              className="h-11 rounded-full bg-blue px-5 text-sm font-medium text-white transition-colors hover:bg-blue-dark sm:order-3"
            >
              Accept all
            </button>
            <button
              onClick={rejectNonEssential}
              className="h-11 rounded-full border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-mist sm:order-2"
            >
              Reject non-essential
            </button>
            {manageOpen ? (
              <button
                onClick={savePreferences}
                className="h-11 rounded-full border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-mist sm:order-1"
              >
                Save preferences
              </button>
            ) : (
              <button
                onClick={() => setManageOpen(true)}
                className="h-11 rounded-full px-5 text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:order-1"
              >
                Manage preferences
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
