export const ADVICE_QUOTES = [
  {
    tag: "Networking",
    text: "Pivoting is non-negotiable. If you don't route your traffic, you will only see the 'DMZ' and miss 70% of the exam environment. 'ip route' is your best friend."
  },
  {
    tag: "Enumeration",
    text: "Examine SMB shares meticulously. Low-privilege access often lets you download config files or backup scripts containing hardcoded admin credentials."
  },
  {
    tag: "Mindset",
    text: "The eJPT is about low-hanging fruit. Before attempting complex exploits, check for default credentials on web panels, SSH, or FTP (admin/admin, root/root)."
  },
  {
    tag: "Recon",
    text: "Enumerate every single port found. A non-standard port like 8080 or 8888 might be running a vulnerable management console that grants instant RCE."
  },
  {
    tag: "Post-Ex",
    text: "Always stabilize your shell. You can't use 'sudo' or interactive prompts on a basic Netcat shell. Use Python to upgrade to a full PTY immediately."
  },
  {
    tag: "PrivEsc",
    text: "Check 'sudo -l' as soon as you land. It's the most common path to root in this exam. Look for binaries that don't require a password."
  },
  {
    tag: "Bridges",
    text: "Read the routing table. If a machine has multiple interfaces, you've found your bridge. Set up your autoroute and start scanning the new segment."
  }
];
