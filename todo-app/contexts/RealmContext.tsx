import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { Realm } from 'realm';
import { realmConfig } from '@/models/TodoSchema';

interface RealmContextType {
  realm: Realm | null;
  isRealmReady: boolean;
}

const RealmContext = createContext<RealmContextType | undefined>(undefined);

export function RealmProvider({ children }: { children: React.ReactNode }) {
    const [realm, setRealm] = useState<Realm | null>(null);
    const [isRealmReady, setIsRealmReady] = useState(false);
  
    useEffect(() => {
      const initializeRealm = async () => {
        try {
          const realmInstance = await Realm.open(realmConfig);
          setRealm(realmInstance);
          setIsRealmReady(true);
        } catch (error) {
          console.error('Failed to open Realm:', error);
        }
      };
  
      initializeRealm();
  
      return () => {
        if (realm) {
          realm.close();
        }
      };
    }, []);
  
    return (
      <RealmContext.Provider value={{ realm, isRealmReady }}>
        {children}
      </RealmContext.Provider>
    );
  }
  
  export function useRealm() {
    const context = useContext(RealmContext);
    if (!context) {
      throw new Error('useRealm must be used within RealmProvider');
    }
    return context;
  }