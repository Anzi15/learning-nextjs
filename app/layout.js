import Header from './components/Header';
import "../app/globals.css"
import HeaderMsg from './components/HeaderMsg';
import Footer from './components/Footer';
import ToastProvider from './components/ToastProviderProps';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
      <ToastProvider>
        <Header>
          <HeaderMsg/>
        </Header>
        {children}
        <Footer/>
      </ToastProvider>
      </body>
    </html>
  );
}
