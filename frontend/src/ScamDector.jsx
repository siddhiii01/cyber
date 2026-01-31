import { useState } from 'react';
import axios from 'axios';

export const ScamDetector = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/analyze', {
        message: message.trim()
      });
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze. Check if backend & AI service are running.');
    } finally {
      setLoading(false);
    }
  };

  const fillExample = (text) => {
    setMessage(text);
    setResult(null);
    setError(null);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      padding: '20px',
      fontFamily: 'system-ui, sans-serif',
      color: '#000000'  // base text color
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            color: '#000000'
          }}>
            CyberGuard AI
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            marginTop: '8px',
            color: '#000000'
          }}>
            Paste any suspicious message or email — get instant scam detection
          </p>
        </header>

        <div style={{ 
          background: '#f9f9f9',
          borderRadius: '12px',
          border: '1px solid #dddddd',
          padding: '24px'
        }}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste suspicious WhatsApp message, SMS, email, or link here..."
            style={{
              width: '100%',
              height: '180px',
              padding: '16px',
              fontSize: '16px',
              border: '1px solid #cccccc',
              borderRadius: '8px',
              resize: 'vertical',
              fontFamily: 'inherit',
              background: '#ffffff',
              color: '#000000'
            }}
          />

          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={analyzeMessage}
              disabled={loading || !message.trim()}
              style={{
                padding: '14px 32px',
                fontSize: '16px',
                background: loading ? '#cccccc' : '#555555',
                color: '#ffffff',  // white on dark button for contrast
                border: 'none',
                borderRadius: '8px',
                cursor: loading || !message.trim() ? 'not-allowed' : 'pointer',
                fontWeight: '600'
              }}
            >
              {loading ? 'Analyzing...' : 'Check for Scam'}
            </button>

            <button
              onClick={() => fillExample('Rs 18,450 credited to a/c XXXXX4321 on 28-01-2026 by UPI Ref No 5123987612. Money sent by mistake. Please return immediately to UPI ID: refundhelp@okaxis UPI or call 9876543210. Do not ignore!')}
              style={{
                padding: '12px 20px',
                background: '#eeeeee',
                border: '1px solid #cccccc',
                borderRadius: '8px',
                cursor: 'pointer',
                color: '#000000'
              }}
            >
              Try Fake UPI Refund
            </button>

            <button
              onClick={() => fillExample('Your parcel AWB987654321 is out for delivery. Pay Rs 49 COD fee here: https://indiapost-secure[.]in/pay?id=987654321')}
              style={{
                padding: '12px 20px',
                background: '#eeeeee',
                border: '1px solid #cccccc',
                borderRadius: '8px',
                cursor: 'pointer',
                color: '#000000'
              }}
            >
              Try Fake Delivery Scam
            </button>
          </div>

          {error && (
            <div style={{ 
              marginTop: '20px', 
              padding: '16px', 
              border: '1px solid #aaaaaa',
              borderRadius: '8px',
              background: '#f9f9f9',
              color: '#000000'
            }}>
              {error}
            </div>
          )}

          {result && (
            <div style={{
              marginTop: '32px',
              padding: '24px',
              background: '#f9f9f9',
              borderRadius: '12px',
              border: '1px solid #dddddd',
              color: '#000000'
            }}>
              <h2 style={{ 
                margin: '0 0 16px', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#000000'
              }}>
                {result.verdict ? 'Potential Scam Detected' : 'Appears Safe'}
              </h2>

              <p style={{ 
                fontSize: '1.1rem', 
                margin: '12px 0',
                color: '#000000'
              }}>
                <strong>Confidence:</strong> {result.confidence_score}%
              </p>

              <p style={{ 
                margin: '16px 0',
                color: '#000000'
              }}>
                <strong>Analysis:</strong> {result.explanation}
              </p>

              {result.red_flags?.length > 0 && (
                <div>
                  <h3 style={{ 
                    margin: '20px 0 8px', 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#000000'
                  }}>
                    Identified Red Flags:
                  </h3>
                  <ul style={{ 
                    paddingLeft: '24px', 
                    margin: 0, 
                    lineHeight: '1.7',
                    listStyleType: 'disc',
                    color: '#000000'
                  }}>
                    {result.red_flags.map((flag, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};