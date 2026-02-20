
import  { useState, useEffect } from 'react';

import api from "../utils/api";

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storeContext, setStoreContext] = useState({
    storeName: '',
    categories: [],
    features: [],
    products: [],
    bundleOffers: [],
    studentDiscounts: [],
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer open state

  // Fetch store context from APIs
  // useEffect(() => {
  //   const fetchStoreData = async () => {
  //     try {
  //       const [marketplaceRes, dashboardRes, bundleOffersRes, studentDiscountRes] = await Promise.all([
  //         // axios.get('http://localhost:5000/api/marketplace'),
  //         api.get("/api/marketplace")
  //     ]);

  //       setStoreContext({
  //         storeName: "MIT Market Place", // Static as it's the store name
  //         categories: marketplaceRes.data.categories || [],
  //         features: marketplaceRes.data.features || [],
  //         products: dashboardRes.data.products || [],
  //         bundleOffers: bundleOffersRes.data || [],
  //         studentDiscounts: studentDiscountRes.data || [],
  //       });
  //     } catch (error) {
  //       console.error('Error fetching store data:', error);
  //     }
  //   };

  //   fetchStoreData();
  // }, []);
  useEffect(() => {
  const fetchStoreData = async () => {
    try {
      const marketplaceRes = await api.get("/api/marketplace");

      if (marketplaceRes.data.success) {
        const products = marketplaceRes.data.data;

        setStoreContext({
          storeName: "MIT Market Place",
          categories: [...new Set(products.map(p => p.category))],
          features: [], // backend doesn't provide this
          products: products,
          bundleOffers: [], // remove if not in backend
          studentDiscounts: [], // remove if not in backend
        });
      }

    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };

  fetchStoreData();
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || loading) return;

    const enhancedPrompt = `
      Context: You are a helpful assistant for our e-commerce store ${storeContext.storeName}.
      Store Categories: ${storeContext.categories.join(', ')}
      Available Features: ${storeContext.features.join(', ')}
      Current Products and Offers:
      Products: ${JSON.stringify(storeContext.products, null, 2)}
      Bundle Offers: ${JSON.stringify(storeContext.bundleOffers, null, 2)}
      Student Discounts: ${JSON.stringify(storeContext.studentDiscounts, null, 2)}
      Customer Question: ${message}
      Please provide a helpful response based on our store's data.
    `;

    const userMessage = {
      text: message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };
    setChatHistory((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await api.post('/Ai', {
        prompt: enhancedPrompt,
      });

      const botMessage = {
        text: response.data,
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        text: 'Sorry, I had trouble responding. Please try again.',
        isBot: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    }

    setMessage('');
    setLoading(false);
  };

  return (
    <div>
      {/* Toggle Button for Drawer */}
      <button
        style={styles.toggleButton}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        {isDrawerOpen ? 'Close Chat' : 'AI Assistant'}
      </button>

      {/* Side Drawer (Chatbot) */}
      <div
        style={{
          ...styles.container,
          ...(isDrawerOpen ? styles.drawerOpen : {}),
        }}
      >
        <div style={styles.chatHistory}>
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(msg.isBot ? styles.botMessage : styles.userMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            style={styles.input}
            value={message}
            placeholder="Meet Your AI assistant"
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    width: '300px', // Width of the side drawer
    height: '70vh', // Full screen height
    position: 'fixed',
    top: 50,
    right: 0, // Right side of the screen; change to 'left' for left side
    borderLeft: '1px solid #ccc', // Side border for the drawer effect
    backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius:"20px",
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 9999, // Ensure it stays above other content
    transform: 'translateX(100%)', // Start hidden
    transition: 'transform 0.3s ease-in-out', // Smooth transition for sliding
  },
  drawerOpen: {
    transform: 'translateX(0)', // Slide in from the right
  },
  chatHistory: {
    flex: 1, // Take up remaining space
    overflowY: 'auto',
    padding: '10px',
    height: 'calc(100vh - 60px)', // Makes the chat history scrollable
  },
  userMessage: {
    backgroundColor: '#e3f2fd',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '8px',
    marginLeft: '20%',
  },
  botMessage: {
    backgroundColor: '#f5f5f5',
    padding: '8px',
    borderRadius: '8px',
    marginBottom: '8px',
    marginRight: '20%',
  },
  form: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
  },
  input: {
    flex: 1,
    padding: '8px',
    marginRight: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  toggleButton: {
    position: 'fixed',
    top: '80vh',
    right: '20px',
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '10px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10000, // Make sure it's on top
  },
};

export default Chatbot;

// openchat
























