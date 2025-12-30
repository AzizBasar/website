import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useTranslation } from 'react-i18next';
import { FileText, Home, Users, Trophy, Plane, Mail, UserPlus, Building } from 'lucide-react';

export function SearchCommand({ open, setOpen }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const runCommand = React.useCallback((command) => {
    setOpen(false);
    command();
  }, [setOpen]);

  const pages = [
    {
      title: t('nav.home'),
      path: '/',
      icon: <Home className="mr-2 h-4 w-4" />,
      keywords: ['home', 'ana sayfa', 'index']
    },
    {
      title: t('nav.blog'),
      path: '/blog',
      icon: <FileText className="mr-2 h-4 w-4" />,
      keywords: ['blog', 'news', 'haberler']
    },
    {
      title: t('nav.vehicles'),
      path: '/araclar',
      icon: <Plane className="mr-2 h-4 w-4" />,
      keywords: ['vehicles', 'araçlar', 'uav', 'drone']
    },
    {
      title: t('nav.team'),
      path: '/takim',
      icon: <Users className="mr-2 h-4 w-4" />,
      keywords: ['team', 'takım', 'members', 'üyeler']
    },
    {
      title: t('nav.achievements'),
      path: '/basarilar',
      icon: <Trophy className="mr-2 h-4 w-4" />,
      keywords: ['achievements', 'başarılar', 'awards', 'ödüller']
    },
    {
      title: t('nav.sponsors'),
      path: '/sponsorlar',
      icon: <Building className="mr-2 h-4 w-4" />,
      keywords: ['sponsors', 'sponsorlar', 'partners', 'ortaklar']
    },
    {
      title: t('nav.contact'),
      path: '/iletisim',
      icon: <Mail className="mr-2 h-4 w-4" />,
      keywords: ['contact', 'iletişim', 'email', 'address']
    },
    {
      title: t('nav.join_us'),
      path: '/join-us',
      icon: <UserPlus className="mr-2 h-4 w-4" />,
      keywords: ['join us', 'katıl', 'apply', 'başvuru']
    }
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t('search.placeholder') || "Type a command or search..."} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.path}
              value={page.title}
              onSelect={() => {
                runCommand(() => navigate(page.path));
              }}
            >
              {page.icon}
              <span>{page.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
