import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Flame, ShoppingCart, Phone, Mail, MapPin, Star, Leaf, Award } from 'lucide-react'
import heroImage from './assets/pimentas-hero.jpg'
import variedadesImage from './assets/pimentas-variedades.jpg'
import './App.css'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Pimenta Malagueta',
      description: 'Ardência intensa e sabor marcante. Perfeita para molhos e temperos.',
      price: 'R$ 12,00/100g',
      heat: 5
    },
    {
      id: 2,
      name: 'Pimenta Jalapeño',
      description: 'Sabor suave e versátil. Ideal para recheios e conservas.',
      price: 'R$ 15,00/100g',
      heat: 3
    },
    {
      id: 3,
      name: 'Pimenta Habanero',
      description: 'Extremamente picante com notas frutadas. Para os corajosos!',
      price: 'R$ 20,00/100g',
      heat: 5
    },
    {
      id: 4,
      name: 'Pimenta Dedo-de-Moça',
      description: 'Clássica brasileira com ardência equilibrada e sabor único.',
      price: 'R$ 10,00/100g',
      heat: 4
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Flame className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors animate-pulse" />
            <span className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
              Fogo Mineiro
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('produtos')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Produtos
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contato
            </button>
          </div>
          <Button onClick={() => scrollToSection('contato')} className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Comprar
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🌶️ Pimentas Artesanais
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Sabor Autêntico,
                <span className="text-orange-600 block">Ardência Perfeita</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra pimentas frescas e de qualidade superior, cultivadas com dedicação para trazer o melhor sabor à sua mesa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('produtos')} size="lg" className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 text-lg px-8">
                  Ver Produtos
                </Button>
                <Button onClick={() => scrollToSection('contato')} size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 transition-all duration-300 text-lg px-8">
                  Entre em Contato
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Naturais</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">+50</div>
                  <div className="text-sm text-gray-600">Variedades</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">5★</div>
                  <div className="text-sm text-gray-600">Avaliação</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-red-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Pimentas coloridas frescas" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Naturais</h3>
              <p className="text-gray-600">
                Cultivadas sem agrotóxicos, com respeito ao meio ambiente e à sua saúde.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">
                Selecionadas cuidadosamente para garantir frescor e sabor incomparáveis.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Flame className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Variedade Única</h3>
              <p className="text-gray-600">
                Desde as mais suaves até as extremamente picantes. Temos para todos os gostos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore nossa seleção de pimentas artesanais, cada uma com seu sabor e intensidade únicos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Flame 
                        key={i} 
                        className={`w-4 h-4 ${i < product.heat ? 'text-orange-600 fill-orange-600' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={variedadesImage} 
                alt="Variedades de pimentas" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Sobre a Fogo Mineiro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos apaixonados por pimentas! Nossa missão é trazer o melhor da cultura brasileira de pimentas artesanais para sua casa, com produtos frescos, saborosos e de qualidade incomparável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada pimenta é cultivada com carinho e dedicação, respeitando os ciclos naturais e sem o uso de agrotóxicos. Do plantio à colheita, garantimos que você receba apenas o melhor.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Estamos prontos para atender você! Faça seu pedido ou tire suas dúvidas.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Onde Nos Encontrar</h3>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefone / WhatsApp</div>
                    <div className="text-gray-600">(31) 9 9999-9999</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-mail</div>
                    <div className="text-gray-600">contato@fogomineiro.com.br</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Onde Vender</div>
                    <div className="text-gray-600 text-sm">
                      • Facebook Marketplace (gratuito)<br/>
                      • OLX (anúncios grátis)<br/>
                      • Feiras locais e mercados de produtores
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Faça Seu Pedido</h3>
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <textarea 
                  placeholder="Sua mensagem ou pedido" 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                ></textarea>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 py-6 text-lg">
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">Fogo Mineiro</span>
          </div>
          <p className="text-gray-400 mb-6">
            Pimentas Artesanais de Qualidade Superior
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">WhatsApp</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Fogo Mineiro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

