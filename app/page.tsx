import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Server, Cpu, Coffee } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-green-500" />
            <span className="text-xl font-bold text-white">RogueRL Network</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-gray-300 hover:text-white transition">
              Recursos
            </Link>
            <Link href="#download" className="text-gray-300 hover:text-white transition">
              Download
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition">
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            RogueRL <span className="text-green-500">Launcher</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            A maneira mais fácil de jogar no servidor RogueRL Network com todos os mods necessários automaticamente
            instalados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/download">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Download className="h-5 w-5" />
                Download v0.0.1
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-green-600 text-green-500 hover:bg-green-900/20">
              Ver no GitHub
            </Button>
          </div>
        </section>

        <section id="features" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Recursos do Launcher</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-green-500" />
                  Gerenciamento de Mods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Instala e atualiza automaticamente todos os 31 mods necessários para jogar no servidor survival modded
                  1.16.5.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-green-500" />
                  Configuração de RAM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Configure facilmente a quantidade de RAM alocada para o Minecraft para um desempenho otimizado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-green-500" />
                  Instalação do Java
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Detecta automaticamente se o Java está instalado e baixa a versão correta se necessário.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="download" className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Download do Launcher</h2>
          <Card className="max-w-md mx-auto bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">RogueRL Launcher v0.0.1</CardTitle>
              <CardDescription className="text-gray-400">Versão inicial com funcionalidades básicas</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-left text-gray-300 space-y-2 mb-4">
                <li>✅ Login via nickname (pirata)</li>
                <li>✅ Gerenciamento de modpack</li>
                <li>✅ Configuração de RAM</li>
                <li>✅ Detecção e instalação do Java</li>
                <li>⏳ Login via Microsoft (em breve)</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/download" className="w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                  <Download className="h-5 w-5" />
                  Download (64-bit)
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section id="faq" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Como instalar o launcher?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Basta baixar o arquivo .exe e executá-lo. O launcher irá instalar todos os componentes necessários
                  automaticamente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quais são os requisitos mínimos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Windows 10 ou superior, 4GB de RAM (recomendado 8GB), 2GB de espaço livre em disco e conexão com a
                  internet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">O launcher funciona com contas piratas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Sim, você pode fazer login usando apenas um nickname (modo pirata) ou com sua conta Microsoft
                  original.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
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
