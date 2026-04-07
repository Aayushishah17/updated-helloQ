// import logo from "@/assets/helloq-logo.png";

// const cols = [
//   { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Help Center", "Safety & Reporting"] },
//   { title: "Company", links: ["About", "Careers", "Press", "Blog","Contact"] },
//   { title: "Social", links: ["Instagram", "Twitter", "TikTok", "Discord"] },
// ];

// const Footer = () => (
//   <footer className="relative overflow-hidden">
//     <div className="absolute inset-0 bg-gradient-community" style={{ backgroundSize: "300% 300%", animation: "gradient-shift 12s ease infinite" }} />
    
//     <div className="relative z-10 container mx-auto px-6 py-16">
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
//         <div className="col-span-2 md:col-span-1">
//           <img src={logo} alt="HelloQ" className="h-10 mb-4" />
//           <p className="font-body text-sm text-foreground/70">
//             Where everyone belongs.
//           </p>
//         </div>
//         {cols.map((col) => (
//           <div key={col.title}>
//             <h4 className="font-heading text-sm font-bold text-foreground mb-4">{col.title}</h4>
//             <ul className="space-y-2">
//               {col.links.map((l) => (
//                 <li key={l}>
//                   <a href="#" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">{l}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="border-t border-foreground/10 mt-12 pt-8 text-center">
//         <p className="font-body text-sm text-foreground/50">© 2026 HelloQ. All rights reserved.</p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
import logo from "@/assets/helloq-logo.png";
import { Link } from "react-router-dom";

const cols = [
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/Privacy" },
      { name: "Terms of Service", path: "/Terms" },
      { name: "Help Center", path: "/Help" },
      { name: "Safety & Reporting", path: "/Safety" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Press", path: "#" },
      { name: "Blog", path: "#" },
      { name: "Contact", path: "/Contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Instagram", path: "https://www.instagram.com/thehelloq" },
      { name: "Facebook", path: "https://www.facebook.com/HelloQ" },
      { name: "Snapchat", path: "https://www.snapchat.com/@thehelloq" },
      { name: "Youtube", path: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden">
    
    {/* Background */}
    <div
      className="absolute inset-0 bg-gradient-community"
      style={{
        backgroundSize: "300% 300%",
        animation: "gradient-shift 12s ease infinite",
      }}
    />

    <div className="relative z-10 container mx-auto px-6 py-16">
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="HelloQ" className="h-10 mb-4" />
          <p className="text-sm text-foreground/70">
            Where everyone belongs.
          </p>
        </div>

        {/* Columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold text-foreground mb-4">
              {col.title}
            </h4>

            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.name}>
                  
                  {/* 🔥 IMPORTANT CHANGE */}
                  {l.path.startsWith("/") ? (
                    <Link
                      to={l.path}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {l.name}
                    </Link>
                  ) : (
                    <a
                      href={l.path}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {l.name}
                    </a>
                  )}

                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="border-t border-foreground/10 mt-12 pt-8 text-center">
        <p className="text-sm text-foreground/50">
          © 2026 HelloQ. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;