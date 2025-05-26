import { createContext, useContext, ReactNode, useState } from 'react';

interface SaleContextType {
  saleActive: boolean;
  saleMessage: string;
  saleDiscount: number;
  setSaleActive: (active: boolean) => void;
  setSaleMessage: (message: string) => void;
  setSaleDiscount: (discount: number) => void;
}

const SaleContext = createContext<SaleContextType | undefined>(undefined);

export const SaleProvider = ({ children }: { children: ReactNode }) => {
  const [saleActive, setSaleActive] = useState(false); // Set to true by default
  const [saleMessage, setSaleMessage] = useState('🎉 New Year Special Offer! Get 20% OFF on all memberships! Limited Time Only! 🎉');
  const [saleDiscount, setSaleDiscount] = useState(20);

  return (
    <SaleContext.Provider 
      value={{ 
        saleActive, 
        saleMessage, 
        saleDiscount,
        setSaleActive,
        setSaleMessage,
        setSaleDiscount
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export const useSale = () => {
  const context = useContext(SaleContext);
  if (context === undefined) {
    throw new Error('useSale must be used within a SaleProvider');
  }
  return context;
}; 