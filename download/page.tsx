import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ArrowLeft, FileDown } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-300 hover:text-white flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Download do RogueRL Launcher</h1>

          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileDown className="h-5 w-5 text-green-500" />
                RogueRL Launcher v0.0.1
              </CardTitle>
              <CardDescription className="text-gray-400">Versão inicial com funcionalidades básicas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Recursos incluídos:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Login via nickname (pirata)</li>
                    <li>Gerenciamento automático de modpack</li>
                    <li>Configuração de RAM</li>
                    <li>Detecção e instalação do Java</li>
                    <li>Suporte para Forge 1.16.5 (36.2.42)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Requisitos do sistema:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Windows 10 ou superior (64-bit)</li>
                    <li>4GB de RAM (8GB recomendado)</li>
                    <li>2GB de espaço livre em disco</li>
                    <li>Conexão com a internet</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                <Download className="h-5 w-5" />
                Download RogueRL-Launcher-v0.0.1.exe (64-bit)
              </Button>
              <p className="text-xs text-gray-400 text-center">
                Tamanho do arquivo: 45MB • Atualizado em: {new Date().toLocaleDateString()}
              </p>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Como instalar</h2>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Baixe o arquivo RogueRL-Launcher-v0.0.1.exe</li>
                <li>Execute o arquivo baixado</li>
                <li>Siga as instruções na tela para completar a instalação</li>
                <li>Inicie o launcher e faça login com seu nickname</li>
                <li>Clique em Jogar para baixar automaticamente todos os mods necessários</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Problemas conhecidos</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>O login via conta Microsoft ainda não está disponível (será adicionado na v0.0.2)</li>
                <li>
                  Alguns antivírus podem detectar falsos positivos. Adicione o launcher às exceções se necessário.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Suporte</h2>
              <p className="text-gray-300">
                Se você encontrar algum problema, entre em contato conosco pelo Discord do servidor ou abra uma issue no
                GitHub.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RogueRL Network. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Este launcher não é afiliado à Mojang Studios ou Microsoft.</p>
        </div>
      </footer>
    </div>
  )
}
