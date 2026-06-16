import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const phoneNumber = '919726459356' // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Kshetrajna%20Technologies`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  )
}
