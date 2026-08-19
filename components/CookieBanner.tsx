"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/lib/i18n/types";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

// Renamed from "smartflow-*" during the Nyvexo rebrand — visitors who
// already made a cookie choice under the old key will see the banner once
// more after this ships, which is an acceptable one-time reset.
const STORAGE_KEY = "nyvexo-cookie-consent";

function saveConsent(consent: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("nyvexo-consent-updated", { detail: consent }));
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

export function CookieBanner({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const t = dictionary.cookie;
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
    <div role="dialog" aria-live="polite" aria-label={t.managePreferences} className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
      <Container className="!px-0 sm:!px-0 max-w-3xl">
        <div className="rounded-2xl border border-line bg-white/95 p-5 shadow-[var(--shadow-card-hover)] backdrop-blur-md sm:p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            {t.message}{" "}
            <Link href={localeHref(locale, "/cookie-policy")} className="font-medium text-ink underline underline-offset-2">
              {t.policyLinkText}
            </Link>
            .
          </p>

          {manageOpen && (
            <div className="mt-4 space-y-3 rounded-xl border border-line bg-mist p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">{t.essentialTitle}</p>
                  <p className="text-xs text-ink-soft">{t.essentialDesc}</p>
                </div>
                <input type="checkbox" checked disabled className="size-4 accent-blue" aria-label={t.essentialTitle} />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">{t.analyticsTitle}</p>
                  <p className="text-xs text-ink-soft">{t.analyticsDesc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="size-4 accent-blue"
                  aria-label={t.analyticsTitle}
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-ink">{t.marketingTitle}</p>
                  <p className="text-xs text-ink-soft">{t.marketingDesc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="size-4 accent-blue"
                  aria-label={t.marketingTitle}
                />
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={acceptAll}
              className="h-11 rounded-full bg-blue px-5 text-sm font-medium text-white transition-colors hover:bg-blue-dark sm:order-3"
            >
              {t.acceptAll}
            </button>
            <button
              onClick={rejectNonEssential}
              className="h-11 rounded-full border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-mist sm:order-2"
            >
              {t.rejectNonEssential}
            </button>
            {manageOpen ? (
              <button
                onClick={savePreferences}
                className="h-11 rounded-full border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-mist sm:order-1"
              >
                {t.savePreferences}
              </button>
            ) : (
              <button
                onClick={() => setManageOpen(true)}
                className="h-11 rounded-full px-5 text-sm font-medium text-ink-soft transition-colors hover:text-ink sm:order-1"
              >
                {t.managePreferences}
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
