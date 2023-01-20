import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Moon, Sun } from 'react-feather';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch
      checked={isDark}
      onChange={() => {
        isDark ? setTheme('light') : setTheme('dark');
      }}
      className={clsx('relative flex items-center h-6 rounded-full w-12', {
        'bg-white/10': isDark,
        'bg-black/10': !isDark
      })}
    >
      <span className="sr-only">Change Color Mode</span>
      {isDark ? (
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0, x: 2 }}
            animate={{
              opacity: 1,
              x: 2,
              transition: { ease: [0.11, 0.7, 0, 1] }
            }}
          >
            <Moon />
          </motion.span>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: 26,
              rotate: 360,
              transition: { ease: [0.11, 0.7, 0, 1] }
            }}
          >
            <Sun />
          </motion.span>
        </AnimatePresence>
      )}
    </Switch>
  );
};

export default ThemeToggle;
