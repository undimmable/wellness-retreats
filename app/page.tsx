"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, WifiOff, Droplets } from "lucide-react"

export default function TimelessHomelessRetreat() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const handleWalletConnect = async (walletType: string) => {
    setIsConnecting(true)
    // Simulate wallet connection
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsConnecting(false)
    alert(`${walletType} connected! Ready to pay 1 ETH for your transformative homeless experience.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-600"
          style={{
            backgroundImage: `url('/berlin-s-bahn-warschauer-strasse.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <Badge className="mb-6 bg-amber-600/90 text-white border-0 text-sm font-medium">
            EXCLUSIVE URBAN RETREAT
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Timeless
            <br />
            <span className="text-amber-400">Homeless</span>
            <br />
            Retreat
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Discover the profound <em>wellness of homelessness</em>
            <br />
            on Berlin's most transformative S-Bahn bridge
          </p>
          <Dialog open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-lg font-semibold rounded-full"
              >
                Join Us - 1 ETH
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold">Connect Your Wallet</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <p className="text-center text-muted-foreground">
                  Choose your preferred wallet to pay 1 ETH for this life-changing experience
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => handleWalletConnect("MetaMask")}
                    disabled={isConnecting}
                    className="w-full h-12 text-left justify-start"
                    variant="outline"
                  >
                    <div className="w-8 h-8 bg-orange-500 rounded mr-3"></div>
                    {isConnecting ? "Connecting..." : "MetaMask"}
                  </Button>
                  <Button
                    onClick={() => handleWalletConnect("WalletConnect")}
                    disabled={isConnecting}
                    className="w-full h-12 text-left justify-start"
                    variant="outline"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded mr-3"></div>
                    {isConnecting ? "Connecting..." : "WalletConnect"}
                  </Button>
                  <Button
                    onClick={() => handleWalletConnect("Coinbase Wallet")}
                    disabled={isConnecting}
                    className="w-full h-12 text-left justify-start"
                    variant="outline"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded mr-3"></div>
                    {isConnecting ? "Connecting..." : "Coinbase Wallet"}
                  </Button>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By connecting, you agree to experience true urban enlightenment
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Experience Details */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Transformation Awaits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leave behind the suffocating comfort of your heated apartment and discover the raw authenticity of
              existence on Warschauer Straße's iconic S-Bahn bridge. This isn't just homelessness—it's
              <strong> conscious urban minimalism</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">The Wellness of Homelessness</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Experience the profound liberation that comes from owning nothing, needing nothing, and finding
                  everything in the concrete embrace of Berlin's transportation infrastructure.
                </p>
                <p>Our carefully curated bridge location offers unparalleled access to:</p>
                <ul className="space-y-2 ml-6">
                  <li>• 24/7 urban soundscapes for natural meditation</li>
                  <li>• Authentic weather immersion therapy</li>
                  <li>• Spontaneous community building with fellow travelers</li>
                  <li>• Complete digital detox (no WiFi, no power outlets)</li>
                  <li>• Unfiltered connection to Berlin's industrial soul</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="/berlin-warschauer-strasse-sbahn.png"
                alt="Warschauer Straße S-Bahn Bridge"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h4 className="text-xl font-bold mb-3">Prime Location</h4>
                <p className="text-muted-foreground">
                  Warschauer Straße S-Bahn bridge - Berlin's most spiritually charged concrete structure
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <WifiOff className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h4 className="text-xl font-bold mb-3">Digital Detox</h4>
                <p className="text-muted-foreground">
                  Complete disconnection from the matrix of modern convenience and comfort
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <Droplets className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h4 className="text-xl font-bold mb-3">Weather Therapy</h4>
                <p className="text-muted-foreground">
                  Experience Berlin's full climatic spectrum without barriers or shelter
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-2xl p-12 shadow-lg mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">Transformative Experiences</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="text-lg italic">
                "I thought I knew what minimalism was until I spent three nights on this bridge. Now I understand that
                true wealth is having absolutely nothing while trains pass overhead at 3 AM."
                <footer className="mt-4 font-semibold">— Klaus, Former Tech Executive</footer>
              </blockquote>
              <blockquote className="text-lg italic">
                "The constant vibration from the S-Bahn created a natural full-body massage experience. My chakras have
                never been more aligned with urban infrastructure."
                <footer className="mt-4 font-semibold">— Svetlana, Wellness Influencer</footer>
              </blockquote>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Investment in Your Awakening</h3>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 max-w-2xl mx-auto">
              <div className="text-6xl font-bold text-amber-600 mb-4">1 ETH</div>
              <p className="text-xl mb-6">Complete Urban Enlightenment Package</p>
              <ul className="text-left space-y-2 mb-8 max-w-md mx-auto">
                <li>✓ 7 days of authentic homelessness</li>
                <li>✓ Premium bridge location access</li>
                <li>✓ Weather immersion therapy</li>
                <li>✓ Community integration opportunities</li>
                <li>✓ Lifetime memories of concrete wisdom</li>
              </ul>
              <Dialog open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg font-semibold rounded-full"
                  >
                    Secure Your Spot
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Timeless Homeless Retreat</h4>
          <p className="text-slate-400 mb-6">
            Redefining wellness through the profound simplicity of having absolutely nothing
          </p>
          <p className="text-sm text-slate-500">
            * This is a satirical commentary on the commercialization of spirituality. Please don't actually pay 1 ETH
            to be homeless on a bridge.
          </p>
        </div>
      </footer>
    </div>
  )
}
