import { Header } from './components/Header.jsx';
import { MainContent } from './components/MainContent.jsx';
import { Sidebar } from './components/Sidebar.jsx';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right-side">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
