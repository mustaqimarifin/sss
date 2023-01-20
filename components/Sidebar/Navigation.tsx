/* eslint-disable react/jsx-key */
import {
  AMAIcon,
  AppDissectionIcon,
  BookmarksIcon,
  CritIcon,
  ExternalLinkIcon,
  FigmaIcon,
  GitHubIcon,
  HackerNewsIcon,
  HomeIcon,
  MidnightOilIcon,
  SecurityChecklistIcon,
  SoundcloudIcon,
  StackIcon,
  StaffDesignIcon,
  TwitterIcon,
  VideoIcon,
  WritingIcon
} from 'components/Icon';
import { useRouter } from 'next/router';
import * as React from 'react';
import ThemeToggle from 'components/Button/ThemeToggle'
import { NavigationLink } from './NavigationLink';

export function SidebarNavigation() {
  const router = useRouter();
  // const { data } = useViewerQuery();
  const sections = [
    {
      label: null,
      items: [
        {
          href: '/',
          label: 'Home',
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: router.asPath === '/',
          trailingAction: null,
          isExternal: false
        },

        {
          href: '/blog',
          label: 'Blog',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/blog') >= 0,
          trailingAction: null,
          isExternal: false
        },

        {
          href: '/dashboard',
          label: 'Dashboard',
          icon: CritIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/dashboard') >= 0,
          trailingAction: null,
          isExternal: false
        }
      ]
    },
    {
      label: 'Me',
      items: [
        {
          href: '/bookmarks',
          label: 'Bookmarks',
          icon: BookmarksIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/bookmarks') >= 0,

          isExternal: false
        },

        {
          href: '/press',
          label: 'Press',
          icon: AMAIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/press') >= 0,
          //            !router.asPath.startsWith('/ama/pending'),
          trailingAction: null,
          isExternal: false
        },

        {
          href: '/stack',
          label: 'Stack',
          icon: StackIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/stack') >= 0,
          trailingAction: null,
          isExternal: false
        }
      ]
    },
    {
      label: 'Projects',
      items: [
        {
          href: 'https://soundcloud.com/vmprmyth',
          label: 'VMPRMYTH',
          icon: SoundcloudIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true
        },

        {
          href: 'https://soundcloud.com/midnightoilmusic',
          label: 'Midnight Oil',
          icon: MidnightOilIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true
        },
        {
          href: '/app-dissection',
          label: 'App Dissection',
          icon: AppDissectionIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/app-dissection') >= 0,
          trailingAction: null,
          isExternal: false
        },
        {
          href: '/security',
          label: 'Security Checklist',
          icon: SecurityChecklistIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/security') >= 0,
          trailingAction: null,
          isExternal: false
        },
        {
          href: '/videos',
          label: 'Videos',
          icon: VideoIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/videos') >= 0,
          trailingAction: null,
          isExternal: false
        }
      ]
    },
    {
      label: 'Online',
      items: [
        {
          href: 'https://twitter.com/vmprmyth',
          label: 'Twitter',
          icon: TwitterIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true
        },

        {
          href: 'https://github.com/mustaqimarifin',
          label: 'GitHub',
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true
        },
   
      ]
    }
  ];

  return (
    <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section, i) => {
        return (
          <ul key={section.label} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, i) => (
              <NavigationLink key={i} link={item} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
