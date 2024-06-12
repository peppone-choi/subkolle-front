'use client';
import { persistStore } from 'redux-persist';
import store from './store';
import { Provider } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

persistStore(store);
export default function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
