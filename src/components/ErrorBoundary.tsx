import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            <h1 className="text-xl font-bold tracking-tight mb-3">Algo deu errado ao carregar o site</h1>
            <p className="text-sm text-neutral-400 mb-6">
              Ocorreu uma falha inesperada. Tente recarregar a página ou limpar o cache do navegador.
            </p>
            {this.state.error && (
              <pre className="text-xs bg-black/60 text-neutral-400 p-3 rounded-xl overflow-x-auto text-left mb-6 font-mono border border-neutral-800">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-6 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
