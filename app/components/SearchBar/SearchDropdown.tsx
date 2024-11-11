import React, { useEffect, useState } from 'react';
import { generateToken } from '../../lib/tokenHelper';
 

type Category = {
  tender_category_id: number;
  tender_category_name: string;
};

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }> = ({ 
  children, 
  variant = 'primary', 
  ...props 
}) => {
  const baseStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }

  const styles = variant === 'primary' 
    ? { ...baseStyle, backgroundColor: '#10B981', color: 'white' }
    : { ...baseStyle, backgroundColor: 'transparent', color: 'white', border: '2px solid white' }

  return <button style={styles} {...props}>{children}</button>
}

export default function Component() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // Explicitly type the 'categories' state
  const [categories, setData] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await generateToken();
      try {
        const response = await fetch(`${apiUrl}/categories-list/`, {
          method: 'POST',
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const defaultOptions = [
    { tender_category_id: 1, tender_category_name: 'Default Category' },
  ];

  // Now TypeScript knows categories is either null or an array of Category objects
  const optionsToDisplay = categories && categories.length > 0 ? categories : defaultOptions;

  const containerStyle: React.CSSProperties = {
    minHeight: '88vh',
    background: 'linear-gradient(to bottom right, #312E81, #5B21B6, #831843)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const mainStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '50px 20px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '38px',
    marginBottom: '20px',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px',
  };

  return (
    <div style={containerStyle}>
      <main style={mainStyle}>
        <br />
        <h2 style={titleStyle}>AI-powered platform to make your bidding easy</h2>
        <p style={subtitleStyle}>
          Automate your tender submission process, align your teams, and secure more contracts with our
          advanced bid management system
        </p>

        <div className="flex items-center justify-center">
          <div className="xl:w-1/2 shadow-lg bg-transparent text-center grid grid-cols-1 sm:grid-cols-12 gap-1 p-4 bg-white shadow-md rounded-md">
            <div className="relative h-12 w-full col-span-6 md:col-span-6">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="h-12 block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 cursor-pointer rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="" disabled>All Categories</option>
                {optionsToDisplay?.map((category) => (
                  <option key={category.tender_category_id} className="cursor-pointer">
                    {category.tender_category_name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div className="col-span-5 md:col-span-5 bg-purple-800">
              <input
                type="text"
                placeholder="Search for tenders..."
                className="h-12 w-full bg-gray-200 text-white-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 bg-transparent"
              />
            </div>

            <div className="col-span-1 md:col-span-1">
              <button className="h-12 flex items-center justify-center bg-purple-600 text-white font-bold py-2 px-3 rounded hover:bg-purple-700 transition duration-200">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 2a9 9 0 100 18 9 9 0 000-18zM21 21l-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="flex justify-center items-center">
          <div className="flex space-x-4">
            <Button>Book Your Free Demo</Button>
            <Button variant="outline" className="flex items-center">
              <svg
                width="25"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              <span>See how it works</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
