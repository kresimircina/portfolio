// Layout.jsx
// Split layout: fiksni sidebar lijevo + skrolabilni content desno

function Layout({ sidebar, children }) {
  return (
    <div className="min-h-screen lg:flex lg:gap-12 max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <aside className="lg:w-5/12 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)]">
        {sidebar}
      </aside>

      <main className="lg:w-7/12 pt-12 lg:pt-0">
        {children}
      </main>
    </div>
  );
}

export default Layout;