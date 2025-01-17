import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          ScholarAssist
        </h1>
        <p className="leading-normal text-zinc-900">
          This is a chatbotbuilt with
          {' '}
          <ExternalLink href="https://ai.google.dev">
            Google Gemini AI
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          Based around the evaluation of scholarly research for the benefit of students  Lead dev -  Anaya Cole
        </p>
      </div>
    </div>
  )
}
