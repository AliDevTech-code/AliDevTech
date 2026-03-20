import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923063159899?text=Hi%20Ali,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20services!"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        boxShadow: "0 4px 24px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4)",
        animation: "whatsapp-pulse 2s infinite",
        transition: "transform 0.2s",
        textDecoration: "none",
      }}
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="30"
        height="30"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L0 24l6.345-1.499A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.667-.518-5.188-1.418l-.371-.22-3.767.89.944-3.663-.242-.378A9.932 9.932 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
      <style>{`
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 4px 24px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0.4); }
          70% { box-shadow: 0 4px 24px rgba(37,211,102,0.5), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 24px rgba(37,211,102,0.5), 0 0 0 0 rgba(37,211,102,0); }
        }
        a[title="Chat on WhatsApp"]:hover { transform: scale(1.1); }
      `}</style>
    </a>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
        <WhatsAppFloat />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
