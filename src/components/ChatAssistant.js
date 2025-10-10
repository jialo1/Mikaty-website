import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../translations";

export default function ChatAssistant({ lang = 'fr' }) {
  const t = useTranslation(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: t.chatAssistant.greeting,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // S'assurer que le composant est prêt
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Base de connaissances pour les réponses automatiques
  const knowledgeBase = {
    "bonjour": "Bonjour ! Comment puis-je vous aider avec Mikaty ? 😊",
    "salut": "Salut ! Je suis là pour vous aider avec toutes vos questions sur Mikaty !",
    "aide": "Je peux vous aider avec :\n• Création de compte\n• Paiements et transferts\n• Sécurité\n• Problèmes techniques\n• Tarifs et frais\nQue souhaitez-vous savoir ?",
    "compte": "Pour créer un compte Mikaty :\n1. Téléchargez l'application\n2. Entrez votre numéro de téléphone\n3. Recevez le code SMS\n4. Créez votre mot de passe\nC'est tout ! Pas besoin de compte bancaire.",
    "paiement": "Avec Mikaty, vous pouvez :\n• Transférer de l'argent (gratuit entre utilisateurs)\n• Payer des factures (électricité, eau, etc.)\n• Acheter du crédit mobile\n• Recharger votre compte\nLes frais sont minimes, entre 50-200 FCFA.",
    "transfert": "Les transferts entre utilisateurs Mikaty sont instantanés et gratuits ! Pour les transferts bancaires, comptez 24-48h.",
    "sécurité": "Mikaty utilise les technologies de cryptage les plus avancées. Vos données et transactions sont protégées. Nous sommes agréés par les autorités de régulation.",
    "frais": "• Transferts entre utilisateurs : GRATUIT\n• Recharges : 50-200 FCFA\n• Paiements de factures : 100-300 FCFA\n• Pas de frais cachés !",
    "télécharger": "Téléchargez Mikaty :\n• Google Play : https://play.google.com/store/apps/details?id=ton.app\n• App Store : https://apps.apple.com/app/idtonappid",
    "contact": "Contactez-nous :\n• Email : support@mikaty.com\n• Téléphone : +221 33 XXX XX XX\n• Page Contact : /contact\n• Support 24/7 disponible",
    "micard": "MiCard est notre carte virtuelle qui vous permet de :\n• Payer en ligne de manière sécurisée\n• Gérer vos dépenses\n• Avoir un IBAN pour recevoir des virements\n• Utiliser le tap-to-pay",
    "pays": "Mikaty est disponible dans 15 pays d'Afrique : Sénégal, Côte d'Ivoire, Mali, Burkina Faso, et d'autres pays de la région.",
    "merci": "De rien ! N'hésitez pas si vous avez d'autres questions. Bonne journée ! 😊",
    "au revoir": "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions. Bonne journée ! 👋",
    "bye": "Bye ! À bientôt sur Mikaty ! 👋"
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Recherche de mots-clés dans la base de connaissances
    for (const [keyword, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Réponses par défaut si aucun mot-clé n'est trouvé
    const defaultResponses = [
      "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ?",
      "Je peux vous aider avec les comptes, paiements, sécurité, ou problèmes techniques. Que souhaitez-vous savoir ?",
      "Désolé, je n'ai pas la réponse à cette question. Contactez notre support via /contact pour une assistance personnalisée.",
      "Je suis spécialisé dans les questions sur Mikaty. Essayez de me poser une question sur nos services !"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulation de délai de réponse
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: "bot",
        text: getBotResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Comment créer un compte ?",
    "Quels sont les frais ?",
    "Comment transférer de l'argent ?",
    "C'est sécurisé ?"
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isReady) return null;

  return (
    <>
      {/* Bouton flottant pour ouvrir le chat */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-miikaty hover:bg-miikaty-dark text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>

      {/* Interface de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-miikaty text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Assistant Mikaty</h3>
                  <p className="text-sm opacity-90">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-miikaty text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Indicateur de frappe */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Questions rapides */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Questions rapides :</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-miikaty hover:text-white px-3 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.chatAssistant.placeholder}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:border-miikaty dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-miikaty hover:bg-miikaty-dark text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 