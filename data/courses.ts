import { Course } from '../types';

export const COURSES: Record<string, Course> = {
  beginner: {
    id: 'beginner',
    level: 'Beginner',
    title: 'The Rabbit Hole',
    description: 'Understand the fundamental problems of money and why Bitcoin is the solution.',
    chapters: [
      {
        id: 'ch-1',
        title: 'What is Money?',
        topics: [
          {
            id: 't-1-1',
            title: 'The History of Value',
            content: [
              "Before money, humans used barter. If you had cows but wanted shoes, you had to find a cobbler who wanted a cow. This 'coincidence of wants' problem made trade slow.",
              "Societies chose items like seashells, salt, and gold to act as money. Gold became the standard because it was scarce, durable, and hard to produce.",
              "Money is a technology for communicating value. Good money (Store of Value) preserves your labor for the future."
            ],
            questions: [
              {
                id: 'q-1-1-1',
                question: "What was the main problem with the barter system?",
                options: ["It was too fast", "Coincidence of wants", "Items were too expensive", "No one liked cows"],
                correctAnswer: 1,
                category: 'spender'
              },
              {
                id: 'q-1-1-2',
                question: "Why did gold become the standard?",
                options: ["It is shiny", "It is easy to find", "It is scarce and durable", "It is heavy"],
                correctAnswer: 2,
                category: 'believer'
              }
            ]
          },
          {
            id: 't-1-2',
            title: 'The Fiat Trap',
            content: [
              "Fiat means 'by decree'. It has value only because the government says so. Unlike gold, it is not scarce; central banks can print unlimited amounts.",
              "Printing money causes inflation—a hidden tax that steals value from your savings. In Mwihoko, we see this when unga prices rise.",
              "Fiat encourages spending now (High Time Preference) because money held today buys less tomorrow."
            ],
            questions: [
              {
                id: 'q-1-2-1',
                question: "What does 'Fiat' mean?",
                options: ["Backed by gold", "By decree", "Digital money", "Future money"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-1-2-2',
                question: "What happens when governments print more money?",
                options: ["Everyone gets rich", "Prices go down", "Inflation occurs", "Nothing happens"],
                correctAnswer: 2,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-1-3',
            title: 'Enter Bitcoin',
            content: [
              "Bitcoin is the first engineered money. It has a fixed supply of 21 million coins. No government can print more.",
              "It is digital, permissionless, and global. You can send it from Mwihoko to New York instantly without a bank.",
              "Bitcoin allows you to opt-out of the broken fiat system and store your wealth in a vault that cannot be debased."
            ],
            questions: [
              {
                id: 'q-1-3-1',
                question: "What is the maximum supply of Bitcoin?",
                options: ["100 Million", "Unlimited", "21 Million", "It changes every year"],
                correctAnswer: 2,
                category: 'noderunner'
              },
              {
                id: 'q-1-3-2',
                question: "Who controls Bitcoin?",
                options: ["The CEO", "The Government", "No one (Decentralized)", "The Banks"],
                correctAnswer: 2,
                category: 'noderunner'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-2',
        title: 'Why Bitcoin?',
        topics: [
          {
            id: 't-2-1',
            title: 'Digital Scarcity',
            content: [
              "Digital files (MP3s, PDFs) are easy to copy. If money could be copied, it would be worthless.",
              "Bitcoin's Blockchain prevents copying. Once sent, the coin is gone from your wallet. This created absolute scarcity on the internet.",
              "There are only 21 million coins, divisible into Satoshis (Sats)."
            ],
            questions: [
              {
                id: 'q-2-1-1',
                question: "Why is Bitcoin unique on the internet?",
                options: ["It is colorful", "It cannot be copied (Digital Scarcity)", "It is a PDF", "It is made by Apple"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-2-1-2',
                question: "What is the smallest unit of Bitcoin?",
                options: ["A bit", "A Satoshi (Sat)", "A crumb", "A millibit"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-2-2',
            title: 'Decentralization',
            content: [
              "Bitcoin has no CEO or headquarters. It runs on thousands of computers (nodes) worldwide.",
              "This makes it impossible to shut down. Even if banned in one country, the network survives elsewhere.",
              "No single person can freeze your account or seize your funds."
            ],
            questions: [
              {
                id: 'q-2-2-1',
                question: "Who is the CEO of Bitcoin?",
                options: ["Satoshi Nakamoto", "Elon Musk", "There is no CEO", "Vitalik Buterin"],
                correctAnswer: 2,
                category: 'noderunner'
              },
              {
                id: 'q-2-2-2',
                question: "What happens if a government bans Bitcoin?",
                options: ["It stops working", "It keeps running globally", "It gets deleted", "Price goes to zero"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          },
          {
            id: 't-2-3',
            title: 'Censorship Resistance',
            content: [
              "Censorship resistance means no one can stop a valid transaction. It is neutral money.",
              "Banks often block payments for political reasons. Bitcoin treats everyone equally.",
              "It is a tool for freedom, allowing anyone to transact regardless of who they are."
            ],
            questions: [
              {
                id: 'q-2-3-1',
                question: "What does censorship resistance mean?",
                options: ["You can say bad words", "No one can stop valid transactions", "The internet is censored", "It is illegal"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-2-3-2',
                question: "Bitcoin treats everyone:",
                options: ["Differently", "Equally (Neutral)", "Based on nationality", "Based on credit score"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-3',
        title: 'Under the Hood',
        topics: [
          {
            id: 't-3-1',
            title: 'The Public Ledger',
            content: [
              "The Blockchain is a public notebook recording every transaction. Everyone has a copy.",
              "When you send money, you write a line in this notebook. The network verifies you have the funds.",
              "It is transparent. Anyone can verify the total supply of Bitcoin."
            ],
            questions: [
              {
                id: 'q-3-1-1',
                question: "What is the Blockchain?",
                options: ["A robot", "A physical chain", "A public digital ledger", "A bank vault"],
                correctAnswer: 2,
                category: 'noderunner'
              },
              {
                id: 'q-3-1-2',
                question: "Who can see the ledger?",
                options: ["Only banks", "Only miners", "Everyone", "The government"],
                correctAnswer: 2,
                category: 'noderunner'
              }
            ]
          },
          {
            id: 't-3-2',
            title: 'The Miners',
            content: [
              "Miners are computers that secure the network by solving math puzzles (Proof of Work).",
              "The winner gets to add the next block of transactions and receives new Bitcoin as a reward.",
              "This energy cost makes it extremely expensive to cheat or attack the network."
            ],
            questions: [
              {
                id: 'q-3-2-1',
                question: "What do miners do?",
                options: ["Dig in the ground", "Secure the network", "Hack the internet", "Steal money"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-3-2-2',
                question: "What is Proof of Work?",
                options: ["A job interview", "Solving math with energy", "Signing a contract", "Voting"],
                correctAnswer: 1,
                category: 'noderunner'
              }
            ]
          },
          {
            id: 't-3-3',
            title: 'The Halving',
            content: [
              "Every 4 years, the miner's reward is cut in half. This is 'The Halving'.",
              "It ensures Bitcoin becomes scarcer over time, unlike fiat which is printed endlessly.",
              "This supply shock historically leads to price increases as demand meets less supply."
            ],
            questions: [
              {
                id: 'q-3-3-1',
                question: "What happens every 4 years?",
                options: ["Bitcoin shuts down", "The Halving", "Price crashes", "New CEO"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-3-3-2',
                question: "The Halving makes Bitcoin:",
                options: ["Less scarce", "More scarce", "Worthless", "Faster"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-4',
        title: 'Buying Bitcoin',
        topics: [
          {
            id: 't-4-1',
            title: 'The Exchange',
            content: [
              "Exchanges (like Binance) let you buy BTC with bank transfers or M-Pesa.",
              "They require KYC (ID verification). This links your coins to your real identity.",
              "Never leave money on an exchange. 'Not your keys, not your coins'."
            ],
            questions: [
              {
                id: 'q-4-1-1',
                question: "What is an Exchange?",
                options: ["A marketplace to buy/sell", "A wallet", "A bank", "A miner"],
                correctAnswer: 0,
                category: 'spender'
              },
              {
                id: 'q-4-1-2',
                question: "What is KYC?",
                options: ["Know Your Customer (ID)", "Keep Your Coins", "Key Your Code", "Kill Your Cat"],
                correctAnswer: 0,
                category: 'believer'
              }
            ]
          },
          {
            id: 't-4-2',
            title: 'Peer to Peer (P2P)',
            content: [
              "P2P means buying directly from another person. It is like a digital village market.",
              "Platforms like Peach or Robosats help you find sellers without central control.",
              "This protects your privacy and builds community trust."
            ],
            questions: [
              {
                id: 'q-4-2-1',
                question: "What does P2P stand for?",
                options: ["Pay to Play", "Peer to Peer", "Person to Place", "Public to Private"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-4-2-2',
                question: "P2P is generally:",
                options: ["More private", "Less private", "Illegal", "Slower"],
                correctAnswer: 0,
                category: 'believer'
              }
            ]
          },
          {
            id: 't-4-3',
            title: 'Earning It',
            content: [
              "The best way to get Bitcoin is to earn it for goods or services.",
              "Offer a discount if customers pay in BTC. No ID required, just a QR code.",
              "This is the start of the Circular Economy—earning and spending without fiat."
            ],
            questions: [
              {
                id: 'q-4-3-1',
                question: "What is the 'purest' way to get Bitcoin?",
                options: ["Stealing it", "Buying it", "Earning it", "Finding it"],
                correctAnswer: 2,
                category: 'spender'
              },
              {
                id: 'q-4-3-2',
                question: "Earning Bitcoin requires:",
                options: ["ID Card", "Bank Account", "Just a Wallet/QR", "Permission"],
                correctAnswer: 2,
                category: 'spender'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-5',
        title: 'Wallets',
        topics: [
          {
            id: 't-5-1',
            title: 'Web & App Wallets',
            content: [
              "Wallets store your keys, not the coins. Hot wallets (Apps) are for spending.",
              "Coinos.io is a great web wallet. Blink.sv is a fast mobile wallet for daily use.",
              "They are convenient but less secure than cold storage."
            ],
            questions: [
              {
                id: 'q-5-1-1',
                question: "Which app wallet is mentioned?",
                options: ["Blink.sv", "PayPal", "Uber", "Tinder"],
                correctAnswer: 0,
                category: 'spender'
              },
              {
                id: 'q-5-1-2',
                question: "Hot wallets are best for:",
                options: ["Life savings", "Daily spending", "Mining", "Nothing"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-5-2',
            title: 'Hardware Wallets',
            content: [
              "Hardware wallets (Cold Storage) keep keys offline. They are for savings.",
              "The Blockstream Jade is an affordable, open-source hardware wallet.",
              "It is air-gapped, meaning it uses cameras/QR codes and never plugs into the internet."
            ],
            questions: [
              {
                id: 'q-5-2-1',
                question: "What is the Blockstream Jade?",
                options: ["A gem", "A hardware wallet", "A miner", "A token"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-5-2-2',
                question: "Why use a hardware wallet?",
                options: ["It looks cool", "Security (Offline Keys)", "It is faster", "It is free"],
                correctAnswer: 1,
                category: 'noderunner'
              }
            ]
          },
          {
            id: 't-5-3',
            title: 'The Seed Phrase',
            content: [
              "Your wallet gives you 12 or 24 words. This is your backup.",
              "If you lose your phone, these words restore your money.",
              "NEVER share them. NEVER type them online. Write them on paper only."
            ],
            questions: [
              {
                id: 'q-5-3-1',
                question: "Where should you store your seed phrase?",
                options: ["Google Drive", "Paper/Metal (Offline)", "Facebook", "Phone Notes"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-5-3-2',
                question: "If you lose your seed phrase:",
                options: ["Call support", "Money is lost forever", "Reset password", "Buy more"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-6',
        title: 'Sending Money',
        topics: [
          {
            id: 't-6-1',
            title: 'Addresses',
            content: [
              "An address looks like a long string of characters (bc1q...).",
              "It is safe to share your address to receive money.",
              "Always check the first and last few characters before sending."
            ],
            questions: [
              {
                id: 'q-6-1-1',
                question: "Is it safe to share your address?",
                options: ["No", "Yes", "Only with mom", "Never"],
                correctAnswer: 1,
                category: 'spender'
              },
              {
                id: 'q-6-1-2',
                question: "What should you check before sending?",
                options: ["The weather", "The address characters", "Your shoes", "The news"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-6-2',
            title: 'Transaction Fees',
            content: [
              "You pay a fee to miners to process your transaction.",
              "Fees depend on data size, not amount sent. Sending $1M can cost the same as $10.",
              "If the network is busy, fees go up."
            ],
            questions: [
              {
                id: 'q-6-2-1',
                question: "Fees are paid to:",
                options: ["Wallet App", "Miners", "Government", "Google"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-6-2-2',
                question: "Fees depend on:",
                options: ["Amount sent", "Data size/Network traffic", "Time of day", "Your mood"],
                correctAnswer: 1,
                category: 'noderunner'
              }
            ]
          },
          {
            id: 't-6-3',
            title: 'Confirmations',
            content: [
              "A confirmation means your transaction has been added to a block.",
              "1 confirmation takes about 10 minutes. 3-6 confirmations are considered irreversible.",
              "For coffee, 0 confirmations (Lightning) is fine. For a car, wait for confirmations."
            ],
            questions: [
              {
                id: 'q-6-3-1',
                question: "How long is a block time?",
                options: ["1 sec", "10 mins", "1 hour", "1 day"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-6-3-2',
                question: "For large payments, you should:",
                options: ["Wait for confirmations", "Rush it", "Use credit", "Cancel it"],
                correctAnswer: 0,
                category: 'spender'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-7',
        title: 'Lightning Network',
        topics: [
          {
            id: 't-7-1',
            title: 'The Coffee Problem',
            content: [
              "Bitcoin main chain is too slow/expensive for coffee.",
              "Lightning is a Layer 2 solution for instant, cheap payments.",
              "It makes Bitcoin usable for daily commerce."
            ],
            questions: [
              {
                id: 'q-7-1-1',
                question: "Why Lightning?",
                options: ["To mine faster", "For instant/cheap payments", "To replace Bitcoin", "To look cool"],
                correctAnswer: 1,
                category: 'spender'
              },
              {
                id: 'q-7-1-2',
                question: "Lightning is:",
                options: ["Layer 1", "Layer 2", "A new coin", "A bank"],
                correctAnswer: 1,
                category: 'noderunner'
              }
            ]
          },
          {
            id: 't-7-2',
            title: 'How it Works',
            content: [
              "It works like a bar tab between friends.",
              "You exchange thousands of transactions instantly. You only settle to the chain later.",
              "It uses real Bitcoin, just moving differently."
            ],
            questions: [
              {
                id: 'q-7-2-1',
                question: "Is Lightning Bitcoin real?",
                options: ["No", "Yes", "Sort of", "It is credit"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-7-2-2',
                question: "Lightning works like:",
                options: ["A bank wire", "A bar tab/payment channel", "A stock market", "A printer"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-7-3',
            title: 'Wallets for Speed',
            content: [
              "Phoenix and Blink are popular Lightning wallets.",
              "Phoenix is non-custodial (you hold keys). Blink is custodial (easier but you don't hold keys).",
              "Use Lightning for spending, Cold Storage for saving."
            ],
            questions: [
              {
                id: 'q-7-3-1',
                question: "Which wallet is non-custodial?",
                options: ["Blink", "Phoenix", "CashApp", "Binance"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-7-3-2',
                question: "Use Lightning for:",
                options: ["Saving millions", "Buying coffee", "Mining", "Voting"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-8',
        title: 'Security',
        topics: [
          {
            id: 't-8-1',
            title: 'Backup Rules',
            content: [
              "Write it down. Check it twice. Keep it safe.",
              "Make multiple copies of your seed phrase.",
              "Store them in different locations (Geographic redundancy)."
            ],
            questions: [
              {
                id: 'q-8-1-1',
                question: "How many copies should you have?",
                options: ["Zero", "At least two", "One only", "None"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-8-1-2',
                question: "Why different locations?",
                options: ["For fun", "In case of fire/theft", "To hide from yourself", "No reason"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          },
          {
            id: 't-8-2',
            title: 'Beware of Scams',
            content: [
              "If it sounds too good to be true, it is a scam.",
              "No one will double your Bitcoin. Support will never ask for your seed.",
              "Ignore DMs from strangers about crypto."
            ],
            questions: [
              {
                id: 'q-8-2-1',
                question: "What if someone offers to double your BTC?",
                options: ["Say thanks", "It is a scam", "Send them money", "Ask mom"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-8-2-2',
                question: "Will support ask for your seed?",
                options: ["Yes", "No, never", "Maybe", "Sometimes"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          },
          {
            id: 't-8-3',
            title: 'Privacy',
            content: [
              "Don't brag about your stack.",
              "Avoid reusing addresses to stop people from tracking your balance.",
              "Keep your financial business private."
            ],
            questions: [
              {
                id: 'q-8-3-1',
                question: "Why avoid address reuse?",
                options: ["Saves space", "Privacy", "It is illegal", "It is faster"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'q-8-3-2',
                question: "Rule of thumb:",
                options: ["Tell everyone", "Don't brag/dox yourself", "Post balance online", "Shout it"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          }
        ]
      },
      {
        id: 'ch-9',
        title: 'The Circular Economy',
        topics: [
          {
            id: 't-9-1',
            title: 'Closing the Loop',
            content: [
              "Earn, Spend, Save. All in Bitcoin.",
              "Don't convert to fiat. That leaks value to fees and inflation.",
              "Keep the wealth in the village."
            ],
            questions: [
              {
                id: 'q-9-1-1',
                question: "What is the goal?",
                options: ["Sell for fiat", "Close the loop (Circular)", "Buy Lambo", "Lose keys"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-9-1-2',
                question: "Converting to fiat:",
                options: ["Leaks value", "Is good", "Is necessary", "Is fun"],
                correctAnswer: 0,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-9-2',
            title: 'Merchant Adoption',
            content: [
              "Merchants save on fees (0% vs 3%).",
              "They attract new customers and hold hard assets.",
              "Support local shops that accept BTC."
            ],
            questions: [
              {
                id: 'q-9-2-1',
                question: "How do merchants benefit?",
                options: ["Higher fees", "Lower fees + New customers", "More taxes", "Slower speed"],
                correctAnswer: 1,
                category: 'spender'
              },
              {
                id: 'q-9-2-2',
                question: "You should:",
                options: ["Ignore merchants", "Support BTC merchants", "Use cash only", "Use credit"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          },
          {
            id: 't-9-3',
            title: 'Low Time Preference',
            content: [
              "Thinking long term. Saving for the future generation.",
              "Fiat encourages consuming now. Bitcoin encourages building for later.",
              "It changes your mindset from consumer to builder."
            ],
            questions: [
              {
                id: 'q-9-3-1',
                question: "Low Time Preference means:",
                options: ["Impatience", "Long-term thinking", "Spending fast", "Being late"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'q-9-3-2',
                question: "Bitcoin encourages you to:",
                options: ["Consume", "Build/Save", "Gamble", "Sleep"],
                correctAnswer: 1,
                category: 'believer'
              }
            ]
          }
        ]
      }
    ]
  },
  intermediate: {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Sovereignty',
    description: 'Take control. Learn about wallets, keys, and how to transact privately.',
    chapters: [
      {
        id: 'ich-1',
        title: 'Self Custody',
        topics: [
          {
            id: 'it-1-1',
            title: 'Not Your Keys, Not Your Coins',
            content: [
              "In the traditional bank system, the bank owns your money; you just have an IOU. If the bank fails or freezes your account, you lose access. In Bitcoin, you can hold the asset directly.",
              "This is done through 'Private Keys'. A private key is like a password that grants access to your funds on the blockchain. If you have the key, you have the money.",
              "Exchanges (like Binance) are like banks. If you leave your coins there, you don't own them. True sovereignty means withdrawing your coins to a wallet where you control the keys."
            ],
            questions: [
              {
                id: 'iq-1-1-1',
                question: "Who owns money in a bank?",
                options: ["You", "The Bank", "Nobody", "The government"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'iq-1-1-2',
                question: "What grants access to coins?",
                options: ["Email", "Private Keys", "Password", "Username"],
                correctAnswer: 1,
                category: 'noderunner'
              }
            ]
          },
          {
            id: 'it-1-2',
            title: 'Hot vs Cold',
            content: [
              "A 'Hot Wallet' is connected to the internet. It is convenient for daily spending (like cash in your pocket) but risky for large amounts due to potential malware.",
              "A 'Cold Wallet' (Hardware Wallet) keeps your keys offline on a dedicated device. It acts like a vault. Essential for your life savings.",
              "Treat hot wallets like a physical wallet—only carry what you can afford to lose. Treat cold wallets like a bank vault—secure, hidden, and rarely accessed."
            ],
            questions: [
              {
                id: 'iq-1-2-1',
                question: "Best for savings:",
                options: ["Hot Wallet", "Cold Wallet", "Exchange", "Web"],
                correctAnswer: 1,
                category: 'believer'
              },
              {
                id: 'iq-1-2-2',
                question: "Hot wallets are connected to:",
                options: ["The fridge", "The Internet", "Nothing", "A rock"],
                correctAnswer: 1,
                category: 'spender'
              }
            ]
          },
          {
            id: 'it-1-3',
            title: 'Seed Phrase Security',
            content: [
              "Your wallet will give you a list of 12 or 24 words called a 'Seed Phrase'. This is the master backup. If you lose your device, these words restore your money.",
              "NEVER store these words digitally. Do not take a photo, do not save in notes, do not email them. Hackers scan for these patterns.",
              "Write them on paper or stamp them into steel. If someone finds your seed phrase, they can steal all your money immediately."
            ],
            questions: [
              {
                id: 'iq-1-3-1',
                question: "Store seed on:",
                options: ["Cloud", "Paper/Steel", "Photo", "Email"],
                correctAnswer: 1,
                category: 'noderunner'
              },
              {
                id: 'iq-1-3-2',
                question: "If someone finds your seed:",
                options: ["They can steal funds", "Nothing happens", "They need a password", "It is encrypted"],
                correctAnswer: 0,
                category: 'noderunner'
              }
            ]
          }
        ]
      },
      {
         id: 'ich-2', 
         title: 'Privacy Essentials', 
         topics: [
             { 
               id: 'it-2-1', 
               title: 'KYC Risks', 
               content: [
                 "KYC stands for 'Know Your Customer'. When you buy from a regulated exchange, you must provide your ID. This permanently links your identity to the specific coins you bought.",
                 "Data leaks are common. If the exchange database is hacked, your name, address, and financial info are sold on the dark web. This puts you at risk of physical attacks.",
                 "Since the Bitcoin ledger is public, anyone who knows your address (linked via KYC) can see your entire balance and transaction history. Privacy is your first line of defense."
               ], 
               questions: [
                 {id:'q-2-1-1', question:'What is the main risk of KYC?', options:['None', 'Data Leaks & Identity Linking', 'Speed', 'Cost'], correctAnswer:1, category:'noderunner'}, 
                 {id:'q-2-1-2', question:'The Bitcoin Ledger is:', options:['Private', 'Public', 'Hidden', 'Encrypted'], correctAnswer:1, category:'noderunner'}
               ]
             },
             { 
               id: 'it-2-2', 
               title: 'Coin Join', 
               content: [
                 "Coin Join is a method of mixing your coins with others to obscure their history. It makes it hard for spies to trace where money came from.",
                 "Wallets like Sparrow or Wasabi offer this feature. It is like shuffling a deck of cards; you can't tell which card came from where.",
                 "This increases fungibility, ensuring one bitcoin is indistinguishable from another, protecting you from censorship."
               ], 
               questions: [
                 {id:'q-2-2-1', question:'Coin Join helps with:', options:['Doubling money', 'Privacy/Fungibility', 'Lowering fees', 'Nothing'], correctAnswer:1, category:'noderunner'}, 
                 {id:'q-2-2-2', question:'Is privacy only for criminals?', options:['Yes', 'No, privacy is a human right', 'Maybe', 'Always'], correctAnswer:1, category:'believer'}
               ]
             },
             {
               id: 'it-2-3',
               title: 'Tor & Network Privacy',
               content: [
                 "Bitcoin transactions are broadcast over the internet. Your Service Provider (ISP) can see that you are using Bitcoin and can link your IP address to your transactions.",
                 "Tor (The Onion Router) is a network that anonymizes your traffic. It bounces your signal around the world so no one knows your physical location.",
                 "Running your wallet or node over Tor is essential to prevent network-level surveillance of your financial activity."
               ],
               questions: [
                 {id:'q-2-3-1', question:'What does your ISP see without Tor?', options:['Nothing', 'Your Bitcoin activity', 'Your password', 'Your seed'], correctAnswer:1, category:'noderunner'},
                 {id:'q-2-3-2', question:'What does Tor hide?', options:['Your IP Address/Location', 'Your Bitcoin Balance', 'Your Private Key', 'The Blockchain'], correctAnswer:0, category:'noderunner'}
               ]
             }
         ]
      },
      {
         id: 'ich-3', 
         title: 'The Mempool', 
         topics: [
             { 
               id: 'it-3-1', 
               title: 'Understanding Fees', 
               content: [
                 "The mempool is the 'waiting room' for transactions. When you send Bitcoin, it sits here until a miner picks it up.",
                 "Miners prioritize transactions with higher fees. If the network is busy, you must pay more to get confirmed quickly.",
                 "Tools like Mempool.space visualize this waiting room, helping you set the right fee so you don't overpay."
               ], 
               questions: [
                 {id:'q-3-1-1', question:'What is the Mempool?', options:['A pool', 'Transaction Waiting Room', 'A bank', 'A miner'], correctAnswer:1, category:'noderunner'}, 
                 {id:'q-3-1-2', question:'Where can you check fee rates?', options:['Google', 'Mempool.space', 'Facebook', 'News'], correctAnswer:1, category:'spender'}
               ]
             },
             { 
               id: 'it-3-2', 
               title: 'RBF (Replace By Fee)', 
               content: [
                 "Sometimes you set a fee too low and your transaction gets stuck in the mempool for days.",
                 "RBF (Replace-By-Fee) allows you to 'bump' the transaction by sending it again with a higher fee.",
                 "This ensures you are never stuck waiting forever. Most modern wallets support this feature."
               ], 
               questions: [
                 {id:'q-3-2-1', question:'RBF stands for:', options:['Real Big Fun', 'Replace By Fee', 'Run Bitcoin Fast', 'Red Blue Fee'], correctAnswer:1, category:'noderunner'}, 
                 {id:'q-3-2-2', question:'When should you use RBF?', options:['When a transaction is stuck', 'When a transaction is fast', 'When a transaction is confirmed', 'Never'], correctAnswer:0, category:'spender'}
               ]
             },
             {
               id: 'it-3-3',
               title: 'Child Pays For Parent (CPFP)',
               content: [
                 "If you are the receiver of a stuck transaction, you can't use RBF. Instead, you use CPFP (Child Pays For Parent).",
                 "You spend the unconfirmed coins in a new transaction (the child) with a very high fee.",
                 "Miners are greedy. To claim the high fee of the child, they must confirm the parent transaction first. This unsticks your money."
               ],
               questions: [
                 {id:'q-3-3-1', question:'Who uses CPFP?', options:['The Sender', 'The Receiver', 'The Miner', 'The Exchange'], correctAnswer:1, category:'noderunner'},
                 {id:'q-3-3-2', question:'How does CPFP work?', options:['Miners take the child high fee', 'You delete the transaction', 'You double spend', 'It cancels the fee'], correctAnswer:0, category:'noderunner'}
               ]
             }
         ]
      },
      { 
        id: 'ich-4', 
        title: 'Hardware Deep Dive', 
        topics: [
          {
            id: 'it-4-1', 
            title: 'Air-Gapped Security', 
            content: [
              "An air-gapped wallet never physically connects to a computer (no USB). It communicates via QR codes or SD cards.",
              "This creates a physical gap that viruses and hackers cannot cross. Even if your computer is infected, your keys are safe.",
              "Devices like the Blockstream Jade, Coldcard, or Foundation Passport are excellent air-gapped options."
            ], 
            questions: [
              {id:'q-4-1-1', question:'How does an air-gapped wallet communicate?', options:['Wifi', 'QR Codes/SD Card', 'Bluetooth', 'USB'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-4-1-2', question:'It protects against:', options:['Online Malware/Hackers', 'Dust', 'Rain', 'Cold'], correctAnswer:0, category:'noderunner'}
            ]
          }, 
          {
            id: 'it-4-2', 
            title: 'Firmware Updates', 
            content: [
              "Hardware wallets run software called 'Firmware'. It is important to keep this updated to fix bugs and security patches.",
              "ALWAYS verify the digital signature of the firmware file before installing. This proves it came from the manufacturer.",
              "Only download from the official site. Scammers create fake sites to trick you into installing malicious software."
            ], 
            questions: [
              {id:'q-4-2-1', question:'Where should you download firmware?', options:['Anywhere', 'Official Manufacturer Site', 'Email link', 'Ads'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-4-2-2', question:'What should you verify?', options:['Digital Signature', 'Color', 'Size', 'Name'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'it-4-3',
            title: 'Supply Chain Attacks',
            content: [
              "Buying a hardware wallet from Amazon or eBay is risky. A middleman could have opened the box, extracted the seed, and resealed it.",
              "Always buy directly from the manufacturer. Check the tamper-evident bag for signs of opening.",
              "If a device comes with a pre-written seed phrase card, it is 100% a scam. Throw it away."
            ],
            questions: [
              {id:'q-4-3-1', question:'Safest place to buy a wallet:', options:['Amazon', 'Direct from Manufacturer', 'eBay', 'Street Vendor'], correctAnswer:1, category:'believer'},
              {id:'q-4-3-2', question:'If seed is pre-written:', options:['It is convenient', 'It is a scam', 'It is safe', 'It is normal'], correctAnswer:1, category:'believer'}
            ]
          }
        ]
      },
      { 
        id: 'ich-5', 
        title: 'Advanced Backups', 
        topics: [
          {
            id: 'it-5-1', 
            title: 'Steel Plates', 
            content: [
              "Paper backups are vulnerable to fire, flood, and pests. For a backup that lasts decades, use steel.",
              "You can buy steel plates and use a center punch to mark your seed words. This can survive a house fire.",
              "This is 'Low Time Preference' in action—preparing for disasters that might not happen for 20 years."
            ], 
            questions: [
              {id:'q-5-1-1', question:'Why use steel for backups?', options:['Pretty', 'Fire/Water Resistance', 'Cheap', 'Light'], correctAnswer:1, category:'believer'}, 
              {id:'q-5-1-2', question:'Steel vs Paper durability:', options:['Paper better', 'Steel better', 'Same', 'Neither'], correctAnswer:1, category:'believer'}
            ]
          }, 
          {
            id: 'it-5-2', 
            title: 'The Passphrase', 
            content: [
              "A passphrase is a '25th word' added to your 24-word seed. It acts as a second factor authentication.",
              "It creates a completely hidden wallet. If a thief forces you to unlock your device, you can use the standard pin, but the passphrase wallet remains invisible.",
              "Unlike the seed, the passphrase is NOT stored on the device. If you forget it, your funds are lost forever."
            ], 
            questions: [
              {id:'q-5-2-1', question:'What is a passphrase?', options:['A password', '25th Word/Hidden Wallet', 'A pin', 'A user'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-5-2-2', question:'If you forget your passphrase:', options:['Funds are lost forever', 'Support can reset it', 'Use seed only', 'It is fine'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'it-5-3',
            title: 'Recovery Drills',
            content: [
              "A backup is only good if it works. You should perform a 'fire drill' annually.",
              "Wipe your device (only after verifying you have the seed!) and try to restore the wallet from your steel plate.",
              "If you made a mistake writing down a word, it is better to find out now than when your house is burning down."
            ],
            questions: [
              {id:'q-5-3-1', question:'Why wipe and restore?', options:['For fun', 'To verify the backup works', 'To delete money', 'To upgrade'], correctAnswer:1, category:'noderunner'},
              {id:'q-5-3-2', question:'How often should you test?', options:['Never', 'Annually/Regularly', 'Daily', 'Once'], correctAnswer:1, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ich-6', 
        title: 'UTXO Management', 
        topics: [
          {
            id: 'it-6-1', 
            title: 'Understanding UTXOs', 
            content: [
              "Bitcoin works like digital cash. When you receive 0.5 BTC, you get a 'coin' (UTXO) worth 0.5. Your balance is the sum of these coins.",
              "If you receive many small payments (e.g., mining payouts), you have many small UTXOs.",
              "Spending many small UTXOs costs more in fees because the transaction data is larger."
            ], 
            questions: [
              {id:'q-6-1-1', question:'UTXO stands for:', options:['Under Table', 'Unspent Transaction Output', 'United Token', 'User Tax'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-6-1-2', question:'Your wallet balance is:', options:['One number', 'Sum of UTXOs', 'Fiat value', 'Credit'], correctAnswer:1, category:'noderunner'}
            ]
          }, 
          {
            id: 'it-6-2', 
            title: 'Consolidation', 
            content: [
              "Consolidation is the process of sending all your small UTXOs to yourself in one transaction to create one big UTXO.",
              "You should do this when network fees are low (e.g., Sunday nights) to save money on future spending.",
              "However, be aware that this links all those past transactions together, which can reduce privacy."
            ], 
            questions: [
              {id:'q-6-2-1', question:'Why consolidate UTXOs?', options:['To save future fees', 'To spend more', 'To hide money', 'To look cool'], correctAnswer:0, category:'spender'}, 
              {id:'q-6-2-2', question:'Best time to consolidate:', options:['Fees high', 'Fees low', 'Always', 'Never'], correctAnswer:1, category:'noderunner'}
            ]
          },
          {
            id: 'it-6-3',
            title: 'Coin Control',
            content: [
              "Most wallets pick which coins to spend automatically. 'Coin Control' allows you to select exactly which UTXO to use.",
              "This is crucial for privacy. You can keep your KYC coins (from Binance) separate from your No-KYC coins (from Robosats).",
              "It prevents linking your entire identity to a single coffee purchase."
            ],
            questions: [
              {id:'q-6-3-1', question:'What is Coin Control?', options:['Automatic spending', 'Manual UTXO selection', 'Government control', 'Mining'], correctAnswer:1, category:'noderunner'},
              {id:'q-6-3-2', question:'Why use Coin Control?', options:['Privacy/Segregation', 'Speed', 'Fees', 'Fun'], correctAnswer:0, category:'believer'}
            ]
          }
        ]
      },
      { 
        id: 'ich-7', 
        title: 'Inheritance', 
        topics: [
          {
            id: 'it-7-1', 
            title: 'The Plan', 
            content: [
              "If you die today, is your Bitcoin lost forever? You need a plan for your family to access your funds.",
              "Simple inheritance involves teaching your spouse where the seed phrase is and how to use it.",
              "Do NOT put your seed phrase in a Will, as Wills become public documents. Reference a secure location instead."
            ], 
            questions: [
              {id:'q-7-1-1', question:'Should you put a seed phrase in a Will?', options:['Yes', 'No (It becomes public)', 'Maybe', 'Always'], correctAnswer:1, category:'believer'}, 
              {id:'q-7-1-2', question:'Simplest inheritance plan:', options:['Teach spouse/family', 'Complex scripts', 'Nothing', 'Hide it'], correctAnswer:0, category:'believer'}
            ]
          },
          {
            id: 'it-7-2', 
            title: 'Multi-sig Inheritance', 
            content: [
              "For larger amounts, you can use a 2-of-3 multisig setup for inheritance.",
              "You hold one key, your lawyer holds one, and your heir holds one. Funds can only move if 2 people agree.",
              "This prevents the lawyer or the heir from stealing funds while you are alive, but allows recovery if you pass away."
            ], 
            questions: [
              {id:'q-7-2-1', question:'How many keys are needed in 2-of-3?', options:['1', '2', '3', '0'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-7-2-2', question:'Benefit of multisig inheritance:', options:['Prevents theft by one party', 'It is faster', 'It is free', 'None'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'it-7-3',
            title: 'Letter of Instruction',
            content: [
              "Write a non-technical letter to your heirs. Explain what Bitcoin is, why you saved it, and who to contact for help.",
              "List the hardware wallets you own and where they are located, but DO NOT write the seed words in this letter.",
              "Include the contact info of a trusted 'Bitcoin Uncle' or expert who can guide them without being able to steal the funds themselves."
            ],
            questions: [
              {id:'q-7-3-1', question:'What goes in the letter?', options:['Seed phrase', 'Instructions/Locations', 'Passwords', 'Keys'], correctAnswer:1, category:'believer'},
              {id:'q-7-3-2', question:'Who should you reference?', options:['A trusted guide', 'A stranger', 'Twitter', 'Nobody'], correctAnswer:0, category:'believer'}
            ]
          }
        ]
      },
      { 
        id: 'ich-8', 
        title: 'Scams & Attacks', 
        topics: [
          {
            id: 'it-8-1', 
            title: 'Phishing', 
            content: [
              "Hackers send emails looking like 'Ledger Support' or 'Binance Security'. They ask you to type your seed phrase to 'secure' your account.",
              "This is Phishing. No reputable company ever needs your seed phrase. If you type it, you lose everything.",
              "Always check the URL carefully. Bookmark your favorite sites and never click links in suspicious emails."
            ], 
            questions: [
              {id:'q-8-1-1', question:'Phishing often asks for:', options:['Name', 'Seed Phrase', 'Email', 'Address'], correctAnswer:1, category:'believer'}, 
              {id:'q-8-1-2', question:'How to verify a site:', options:['Check URL/Bookmarks', 'Color', 'Time', 'Font'], correctAnswer:0, category:'believer'}
            ]
          }, 
          {
            id: 'it-8-2', 
            title: 'Dust Attacks', 
            content: [
              "Attackers send tiny amounts of BTC (dust) to your wallet. They hope you will combine it with your other coins when spending.",
              "If you do, they can analyze the blockchain to link your wallet addresses together and identify you.",
              "Good wallets allow you to 'mark as unspendable' so you don't accidentally touch the dust."
            ], 
            questions: [
              {id:'q-8-2-1', question:'What is a Dust Attack?', options:['Dirt', 'Tiny BTC sent to track you', 'Large BTC', 'Fee'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-8-2-2', question:'How to defend against dust:', options:['Spend it', 'Mark as Unspendable/Don\'t touch', 'Send back', 'Delete wallet'], correctAnswer:1, category:'noderunner'}
            ]
          },
          {
            id: 'it-8-3',
            title: 'SIM Swapping',
            content: [
              "Attackers can trick your phone company into transferring your phone number to their SIM card.",
              "They then use this to intercept SMS 2-Factor Authentication codes to hack your email or exchange accounts.",
              "Defend against this by using App-based 2FA (Google Authenticator) or hardware keys (YubiKey), NEVER SMS 2FA."
            ],
            questions: [
              {id:'q-8-3-1', question:'What is a SIM Swap?', options:['Trading phones', 'Stealing phone number/SMS', 'Buying a new SIM', 'Data plan'], correctAnswer:1, category:'noderunner'},
              {id:'q-8-3-2', question:'Which 2FA is unsafe?', options:['SMS/Text', 'Authenticator App', 'YubiKey', 'Hardware Key'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ich-9', 
        title: 'Sovereign Mindset', 
        topics: [
          {
            id: 'it-9-1', 
            title: 'Responsibility', 
            content: [
              "With great power comes great responsibility. In Bitcoin, there is no customer support. You are the CEO of your own bank.",
              "This requires a shift in mindset. You must verify information, secure your own backups, and stay vigilant.",
              "It empowers you to be dependent on no one, but it means you cannot blame others for mistakes."
            ], 
            questions: [
              {id:'q-9-1-1', question:'Who is customer support in Bitcoin?', options:['You (Self-Custody)', 'Satoshi', 'Binance', 'Gov'], correctAnswer:0, category:'believer'}, 
              {id:'q-9-1-2', question:'The sovereign mindset requires:', options:['Laziness', 'Personal Responsibility', 'Dependency', 'Speed'], correctAnswer:1, category:'believer'}
            ]
          },
          {
            id: 'it-9-2', 
            title: 'Proof of Reserves', 
            content: [
              "Don't trust, verify. This applies to exchanges too. If you must use one, ensure they provide Proof of Reserves.",
              "Better yet, be your own Proof of Reserves by withdrawing your coins to your own node.",
              "The community verifies the network every 10 minutes. You should verify your own holdings just as often."
            ], 
            questions: [
              {id:'q-9-2-1', question:'What is Proof of Reserves?', options:['Showing they have the funds', 'A bank statement', 'A promise', 'A loan'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-9-2-2', question:'Best way to verify reserves:', options:['Take their word', 'Self-Custody', 'Ask a friend', 'Read news'], correctAnswer:1, category:'believer'}
            ]
          },
          {
            id: 'it-9-3',
            title: 'Opting Out',
            content: [
              "Bitcoin is a peaceful protest. By holding it, you are voting against the inflationary fiat system with your wallet.",
              "You don't need to ask for permission to leave the system. You just convert your energy into Bitcoin.",
              "We are not fighting the old system; we are building a new one that makes the old one obsolete."
            ],
            questions: [
              {id:'q-9-3-1', question:'How do you vote in Bitcoin?', options:['With a ballot', 'With your wallet/money', 'By shouting', 'Online polls'], correctAnswer:1, category:'believer'},
              {id:'q-9-3-2', question:'The goal is to:', options:['Destroy everything', 'Build a parallel system', 'Get rich quick', 'Hide'], correctAnswer:1, category:'believer'}
            ]
          }
        ]
      }
    ]
  },
  advanced: {
    id: 'advanced',
    level: 'Advanced',
    title: 'Builder',
    description: 'Construct the network. Nodes, Mining, and Lightning Infrastructure.',
    chapters: [
      { 
        id: 'ach-1', 
        title: 'The Node', 
        topics: [
          {
            id: 'at-1-1', 
            title: 'Verification', 
            content: [
              "Bitcoin is a network of peers. To be a true peer, you must verify the rules yourself. Running a 'Full Node' means you download the entire history of Bitcoin transactions.",
              "When you run a node, you don't rely on anyone else to tell you if a transaction is valid. You check the math yourself.",
              "If you don't run a node, you are trusting someone else's server. Connect your wallet to your own node for true privacy."
            ], 
            questions: [
              {id:'q-a-1-1', question:'Running a node allows:', options:['Trust', 'Trustless Verification', 'Mining rewards', 'Speed'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-a-1-2', question:'Why connect wallet to your node?', options:['Privacy/Sovereignty', 'Money', 'Fame', 'Fun'], correctAnswer:0, category:'noderunner'}
            ]
          }, 
          {
            id: 'at-1-2', 
            title: 'Hardware Specs', 
            content: [
              "You don't need a supercomputer. A Raspberry Pi 4 or a mini PC is enough. The software (like Umbrel or Start9) is free.",
              "The most important component is the storage. You need a 1TB or 2TB SSD (Solid State Drive). HDDs are too slow for syncing.",
              "Your node should be online 24/7 to help the network and keep your copy of the ledger up to date."
            ], 
            questions: [
              {id:'q-a-2-1', question:'Critical hardware component:', options:['SSD Storage', 'Screen', 'Mouse', 'Fan'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-2-2', question:'Typical device:', options:['Raspberry Pi/Mini PC', 'Phone', 'Calculator', 'Watch'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-1-3', 
            title: 'Node Maintenance', 
            content: [
              "Running a node is a commitment. Updates are crucial but can be risky; always backup your channels and wallet data before updating.",
              "Initial Block Download (IBD) takes days and consumes huge bandwidth. Once synced, daily bandwidth is manageable.",
              "Database corruption can happen if power is cut abruptly. Use a UPS (Uninterruptible Power Supply) to protect your node."
            ], 
            questions: [
              {id:'q-a-1-3-1', question:'What happens during IBD?', options:['It mines bitcoin', 'It downloads history', 'It sleeps', 'It breaks'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-a-1-3-2', question:'Protect node from power cuts with:', options:['UPS', 'Solar', 'Water', 'Fan'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ach-2', 
        title: 'Lightning Channels', 
        topics: [
          {
            id: 'at-2-1', 
            title: 'Liquidity Management', 
            content: [
              "Lightning is a network of payment channels. To receive money, you need 'Inbound Liquidity' (capacity on your side).",
              "To send money, you need 'Outbound Liquidity'. Managing this balance is the core task of a routing node.",
              "If all your funds are on your side of the channel, you can send but you cannot receive until you spend some or 'loop out'."
            ], 
            questions: [
              {id:'q-a-2-1-1', question:'To receive, you need:', options:['Inbound Liquidity', 'Outbound Liquidity', 'Fiat', 'Token'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-2-1-2', question:'To send, you need:', options:['Inbound', 'Outbound Liquidity', 'Nothing', 'Permission'], correctAnswer:1, category:'noderunner'}
            ]
          }, 
          {
            id: 'at-2-2', 
            title: 'Opening Channels', 
            content: [
              "Opening a channel requires an on-chain transaction. You lock funds into a 2-of-2 multisig address shared with a peer.",
              "Once open, you can transact infinitely instantly. You only touch the blockchain again when you close the channel.",
              "Fees are paid to miners only when opening or closing. Lightning fees are paid to routing nodes."
            ], 
            questions: [
              {id:'q-a-2-2-1', question:'Opening a channel is:', options:['An on-chain transaction', 'Free', 'Off-chain', 'Instant'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-2-2-2', question:'Funds are locked in:', options:['2-of-2 Multisig', 'Bank', 'Vault', 'Box'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-2-3', 
            title: 'Closing Channels', 
            content: [
              "A 'Cooperative Close' is instant and cheap. Both parties agree on the final balance.",
              "A 'Force Close' happens if a peer is offline or cheating. Funds are timelocked (e.g., for 2 weeks) before you can claim them.",
              "Watchtowers are services that monitor the blockchain for you to prevent your peer from broadcasting an old state (cheating) while you are offline."
            ], 
            questions: [
              {id:'q-a-2-3-1', question:'Force close results in:', options:['Timelocked funds', 'Instant funds', 'Lost funds', 'More funds'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-2-3-2', question:'Watchtowers prevent:', options:['Cheating/Old State Broadcast', 'Fees', 'Lag', 'Bugs'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ach-3', 
        title: 'Command Line', 
        topics: [
          {
            id: 'at-3-1', 
            title: 'Bitcoin-CLI', 
            content: [
              "Real builders don't just use graphical interfaces. They talk to Bitcoin Core directly using the Command Line Interface (CLI).",
              "Commands like `bitcoin-cli getblockchaininfo` or `bitcoin-cli sendtoaddress` give you raw power over your node.",
              "This allows for scripting and automation, essential for building apps or services on top of Bitcoin."
            ], 
            questions: [
              {id:'q-a-3-1-1', question:'Tool for direct interaction:', options:['Bitcoin-CLI', 'GUI', 'Web', 'App'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-3-1-2', question:'CLI allows for:', options:['Automation/Scripting', 'Images', 'Music', 'Chat'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-3-2', 
            title: 'Configuration', 
            content: [
              "The `bitcoin.conf` file controls your node's behavior. You can set it to prune mode (save space) or connect via Tor.",
              "Understanding these settings allows you to customize your node for specific needs, like low bandwidth or high privacy.",
              "Misconfiguration can stop your node from syncing, so always read the documentation."
            ], 
            questions: [
              {id:'q-a-3-2-1', question:'File that controls node behavior:', options:['bitcoin.conf', 'index.html', 'style.css', 'readme.txt'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-3-2-2', question:'Prune mode helps with:', options:['Saving disk space', 'Mining faster', ' earning fees', 'Nothing'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-3-3', 
            title: 'RPC Interface', 
            content: [
              "RPC stands for Remote Procedure Call. It's how external applications (like a wallet app or website) talk to your Bitcoin node.",
              "You authenticate using a cookie file or a username/password combination defined in your config.",
              "Developers use libraries in Python or JS to send JSON-RPC commands to the node programmatically."
            ], 
            questions: [
              {id:'q-a-3-3-1', question:'RPC stands for:', options:['Remote Procedure Call', 'Run Program Code', 'Real Public Coin', 'Rapid Payment Channel'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-3-3-2', question:'Format of RPC commands:', options:['JSON', 'XML', 'HTML', 'CSV'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ach-4', 
        title: 'Mining at Home', 
        topics: [
          {
            id: 'at-4-1', 
            title: 'ASIC Hardware', 
            content: [
              "Bitcoin is mined with ASICs (Application Specific Integrated Circuits). These chips do one thing: SHA-256 hashing.",
              "They are much more efficient than CPUs or GPUs. Mining with a laptop today is impossible.",
              "ASICs are loud and generate a lot of heat, requiring specialized setups for home mining."
            ], 
            questions: [
              {id:'q-a-4-1-1', question:'Standard hardware for mining:', options:['GPU', 'ASIC', 'CPU', 'Phone'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-a-4-1-2', question:'Mining algorithm:', options:['SHA-256', 'Scrypt', 'Ethash', 'RandomX'], correctAnswer:0, category:'noderunner'}
            ]
          }, 
          {
            id: 'at-4-2', 
            title: 'Heat Recycling', 
            content: [
              "Mining turns electricity into money and heat. In Mwihoko, smart builders recycle this waste heat.",
              "You can duct the heat to dry coffee beans, warm a chicken coop, or heat water for your home.",
              "When you use the heat, you are effectively subsidizing your mining costs, making it profitable even with high electricity rates."
            ], 
            questions: [
              {id:'q-a-4-2-1', question:'Main waste product of mining:', options:['Heat', 'Cold', 'Light', 'Water'], correctAnswer:0, category:'believer'}, 
              {id:'q-a-4-2-2', question:'Why recycle heat?', options:['To improve profitability/Efficiency', 'To cool the planet', 'To stop mining', 'No reason'], correctAnswer:0, category:'believer'}
            ]
          },
          {
            id: 'at-4-3', 
            title: 'Mining Pools', 
            content: [
              "Solo mining is like a lottery; you might never find a block. Mining pools allow miners to combine their hash power.",
              "The pool distributes rewards based on how much work you contributed (shares), smoothing out your income.",
              "Miners use the Stratum protocol to communicate with the pool. Be careful to choose pools that support decentralization."
            ], 
            questions: [
              {id:'q-a-4-3-1', question:'Why join a pool?', options:['Smooth income/Reduce variance', 'Increase hashrate', 'It is mandatory', 'Lower heat'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-4-3-2', question:'Protocol used for mining:', options:['Stratum', 'HTTP', 'FTP', 'SMTP'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ach-5', 
        title: 'Nostr & Social', 
        topics: [
          {
            id: 'at-5-1', 
            title: 'Zaps', 
            content: [
              "Nostr is a decentralized social protocol. It integrates tightly with Bitcoin Lightning via 'Zaps'.",
              "A Zap is a tiny payment sent instantly to a content creator. It replaces 'Likes'. Likes are free/fake; Zaps are value/proof of work.",
              "This creates a 'Value for Value' economy where good content is rewarded directly by the audience."
            ], 
            questions: [
              {id:'q-a-5-1-1', question:'What is a Zap?', options:['A like button', 'A Lightning Payment', 'A comment', 'A share'], correctAnswer:1, category:'spender'}, 
              {id:'q-a-5-1-2', question:'Nostr is:', options:['A decentralized protocol', 'A company', 'A coin', 'A bank'], correctAnswer:0, category:'believer'}
            ]
          },
          {
            id: 'at-5-2', 
            title: 'Relays', 
            content: [
              "Nostr doesn't have a central server. Instead, it uses 'Relays' to store and forward messages.",
              "Anyone can run a relay. It's like a mailbox. You can connect to multiple relays to ensure your messages are seen.",
              "This makes the network uncensorable. If one relay blocks you, you can move to another without losing your followers."
            ], 
            questions: [
              {id:'q-a-5-2-1', question:'Where does Nostr store data?', options:['Central Server', 'Relays', 'Blockchain', 'Phone'], correctAnswer:1, category:'noderunner'}, 
              {id:'q-a-5-2-2', question:'Benefit of relays:', options:['Censorship Resistance', 'Fees', 'KYC', 'None'], correctAnswer:0, category:'believer'}
            ]
          },
          {
            id: 'at-5-3', 
            title: 'Keys as Identity', 
            content: [
              "In Nostr, you don't have a username and password stored on a server. Your 'Identity' is a cryptographic key pair.",
              "Your Public Key (npub) is your username. Your Private Key (nsec) allows you to sign posts.",
              "This means you own your followers. You can move from one app (like Damus) to another (like Amethyst) and bring your entire social graph with you."
            ], 
            questions: [
              {id:'q-a-5-3-1', question:'Your Nostr username is your:', options:['Email', 'Public Key', 'Phone Number', 'IP Address'], correctAnswer:1, category:'believer'}, 
              {id:'q-a-5-3-2', question:'Can you move followers between apps?', options:['Yes, you own the graph', 'No, they are locked', 'Only if you pay', 'Sometimes'], correctAnswer:0, category:'believer'}
            ]
          }
        ]
      },
      { 
        id: 'ach-6', 
        title: 'Liquid Network', 
        topics: [
          {
            id: 'at-6-1', 
            title: 'Sidechains', 
            content: [
              "Liquid is a sidechain of Bitcoin. It allows for faster (1 minute) and confidential transactions.",
              "You 'peg-in' BTC to get L-BTC. The L-BTC is backed 1:1 by real Bitcoin locked on the main chain.",
              "Traders use it to move funds between exchanges quickly to arbitrage price differences."
            ], 
            questions: [
              {id:'q-a-6-1-1', question:'Liquid is a:', options:['Sidechain', 'Mainchain', 'Altcoin', 'Fork'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-6-1-2', question:'Asset on Liquid:', options:['L-BTC', 'ETH', 'SOL', 'USDT'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-6-2', 
            title: 'Confidentiality', 
            content: [
              "Unlike Bitcoin main chain, Liquid transactions hide the amount and asset type by default.",
              "Only the sender and receiver know the details. This is crucial for businesses that don't want to reveal their payroll or supplier payments.",
              "It uses 'Confidential Transactions' technology to achieve this privacy."
            ], 
            questions: [
              {id:'q-a-6-2-1', question:'Liquid hides:', options:['Amounts & Asset Types', 'Nothing', 'Sender IP', 'Keys'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-6-2-2', question:'Who sees the details?', options:['Everyone', 'Only Sender/Receiver', 'Miners', 'Exchanges'], correctAnswer:1, category:'noderunner'}
            ]
          },
          {
            id: 'at-6-3', 
            title: 'Issued Assets', 
            content: [
              "Liquid can support other assets besides Bitcoin, like Stablecoins (USDT), Stocks, or Bonds.",
              "Because they are on the same chain, you can perform 'Atomic Swaps'—trading L-BTC for USDT instantly without a trusted middleman.",
              "This removes the counterparty risk of holding funds on a centralized exchange."
            ], 
            questions: [
              {id:'q-a-6-3-1', question:'What is an Atomic Swap?', options:['Trustless P2P Trade', 'A bomb', 'A bank transfer', 'A hack'], correctAnswer:0, category:'spender'}, 
              {id:'q-a-6-3-2', question:'Can Liquid hold USDT?', options:['Yes', 'No', 'Only BTC', 'Maybe'], correctAnswer:0, category:'spender'}
            ]
          }
        ]
      },
      { 
        id: 'ach-7', 
        title: 'Multisig', 
        topics: [
          {
            id: 'at-7-1', 
            title: 'Collaborative Custody', 
            content: [
              "Multisig (Multi-Signature) requires m-of-n keys to spend. A common setup is 2-of-3.",
              "You hold 2 keys, a trusted partner holds 1. This removes single points of failure. If you lose one key, you can recover.",
              "This is the gold standard for institutional security and family wealth preservation."
            ], 
            questions: [
              {id:'q-a-7-1-1', question:'Multisig helps remove:', options:['Single Points of Failure', 'Fees', 'Keys', 'Coins'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-7-1-2', question:'Common setup:', options:['2-of-3', '1-of-1', '0-of-0', '10-of-10'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-7-2', 
            title: 'Coordinators', 
            content: [
              "Setting up multisig used to be hard. Now software like Sparrow Wallet, Specter, or Nunchuk makes it easy.",
              "These 'Coordinators' help you build the transaction and pass it between devices for signing.",
              "They do not hold your keys. They just help the devices talk to each other."
            ], 
            questions: [
              {id:'q-a-7-2-1', question:'What is Sparrow Wallet?', options:['A Coordinator/Wallet', 'A miner', 'A token', 'A blockchain'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-7-2-2', question:'Do coordinators hold keys?', options:['Yes', 'No', 'Maybe', 'Sometimes'], correctAnswer:1, category:'noderunner'}
            ]
          },
          {
            id: 'at-7-3', 
            title: 'Output Descriptors', 
            content: [
              "Backing up a multisig wallet is harder than a single seed. You need ALL the seeds (or m-of-n) PLUS the 'Output Descriptor'.",
              "The descriptor tells the wallet how to derive the addresses. Without it, even if you have the seeds, you might not find your money.",
              "Always save your wallet configuration file along with your seeds in a separate, secure location."
            ], 
            questions: [
              {id:'q-a-7-3-1', question:'To recover multisig you need:', options:['Seeds + Descriptor', 'Just Seeds', 'Just Descriptor', 'Email'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-7-3-2', question:'What is a Descriptor?', options:['Derivation Path/Map', 'A password', 'A photo', 'A key'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ach-8', 
        title: 'Script', 
        topics: [
          {
            id: 'at-8-1', 
            title: 'Programmable Money', 
            content: [
              "Bitcoin transactions are actually small programs written in 'Script'. It is a stack-based language.",
              "It is intentionally not 'Turing Complete' to ensure security. It can't run infinite loops which could crash the network.",
              "This simplicity is a feature, not a bug. It makes Bitcoin robust and predictable."
            ], 
            questions: [
              {id:'q-a-8-1-1', question:'Bitcoin uses which language?', options:['Script', 'Java', 'C++', 'Rust'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-8-1-2', question:'Is it Turing complete?', options:['No', 'Yes', 'Maybe', 'Sort of'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-8-2', 
            title: 'Miniscript', 
            content: [
              "Writing raw Script is dangerous and hard. Miniscript is a modern way to write policies that compile to Script.",
              "It allows you to describe conditions like 'User A OR (User B AND older than 1 year)' easily.",
              "This enables complex custody arrangements and inheritance plans without custom coding errors."
            ], 
            questions: [
              {id:'q-a-8-2-1', question:'Miniscript makes it easier to:', options:['Write spending policies', 'Mine bitcoin', 'Run nodes', 'Buy coffee'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-8-2-2', question:'It compiles down to:', options:['Bitcoin Script', 'Python', 'Binary', 'HTML'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-8-3', 
            title: 'DLCs (Discreet Log Contracts)', 
            content: [
              "DLCs allow for smart contracts on Bitcoin, like betting on a sports game or hedging against price volatility.",
              "They rely on an 'Oracle' to broadcast the outcome. The contract is settled on-chain but looks like a normal transaction to observers.",
              "This brings decentralized finance (DeFi) utility to Bitcoin without bloating the chain."
            ], 
            questions: [
              {id:'q-a-8-3-1', question:'DLC stands for:', options:['Discreet Log Contract', 'Download Content', 'Digital Life Coin', 'Direct Link'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-8-3-2', question:'Who reports the outcome?', options:['Oracle', 'Miner', 'Bank', 'Ref'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      },
      { 
        id: 'ach-9', 
        title: 'The Future', 
        topics: [
          {
            id: 'at-9-1', 
            title: 'Ossification', 
            content: [
              "As Bitcoin grows, changing the base layer becomes harder and riskier. This process is called Ossification.",
              "Like the internet protocols (TCP/IP), the base layer stabilizes while innovation moves to layers above (Lightning, Ark).",
              "Builders accept that the protocol is the foundation, not the experiment."
            ], 
            questions: [
              {id:'q-a-9-1-1', question:'Ossification means:', options:['Stabilizing/Hardening', 'Breaking', 'Melting', 'Moving'], correctAnswer:0, category:'believer'}, 
              {id:'q-a-9-1-2', question:'Where does innovation move?', options:['Layers (L2, L3)', 'Base Layer', 'Altcoins', 'Banks'], correctAnswer:0, category:'believer'}
            ]
          },
          {
            id: 'at-9-2', 
            title: 'Soft Forks', 
            content: [
              "Upgrades to Bitcoin now happen via 'Soft Forks'. These are backward-compatible changes.",
              "Old nodes still accept new blocks, even if they don't understand the new features (like Taproot).",
              "Hard forks (which split the network) are avoided to maintain consensus and network effect."
            ], 
            questions: [
              {id:'q-a-9-2-1', question:'Bitcoin upgrades are usually:', options:['Soft Forks', 'Hard Forks', 'Reboots', 'Shutdowns'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-9-2-2', question:'Soft forks are:', options:['Backward-compatible', 'Destructive', 'Incompatible', 'Fast'], correctAnswer:0, category:'noderunner'}
            ]
          },
          {
            id: 'at-9-3', 
            title: 'Covenants', 
            content: [
              "Covenants are proposed upgrades that would allow users to restrict how their Bitcoin can be spent in the future.",
              "This could enable 'Vaults', where if a hacker steals your key, they must wait a week to spend, giving you time to claw the funds back.",
              "This is a hot topic of debate among developers regarding the best implementation (CTV, APO, etc.)."
            ], 
            questions: [
              {id:'q-a-9-3-1', question:'Covenants restrict:', options:['Where money can be sent', 'Who can own money', 'Mining speed', 'Price'], correctAnswer:0, category:'noderunner'}, 
              {id:'q-a-9-3-2', question:'Vaults allow you to:', options:['Claw back stolen funds', 'Print money', 'Hide transactions', 'Avoid fees'], correctAnswer:0, category:'noderunner'}
            ]
          }
        ]
      }
    ]
  }
};