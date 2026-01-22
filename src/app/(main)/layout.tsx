import { Navigation } from '@/components/navigation';
import { ConditionalFooter } from '@/components/conditional-footer';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/error-boundary';
import EmailJSScripts from '@/components/emailjs-scripts';
import { LanguageProvider } from '@/hooks/use-language';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LanguageProvider>
            <ErrorBoundary>
                <EmailJSScripts />
                <Navigation />
                <main className="min-h-screen">{children}</main>
                <ConditionalFooter />
                <Toaster />
            </ErrorBoundary>
        </LanguageProvider>
    );
}
