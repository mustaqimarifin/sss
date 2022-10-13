import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { generateJSON } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import { MentionsExtension } from 'components/Comments';
import traverse from 'traverse';

export const getMentionedUserIds = (doc: string): string[] => {
  const userIds: string[] = [];
  const json = generateJSON(doc, [
    StarterKit,
    Placeholder,
    MentionsExtension,
    CodeBlockLowlight,
    Link
  ]);
  traverse(json).forEach(function (node) {
    if (node?.type === 'mention') {
      userIds.push(node.attrs.id);
    }
  });
  return userIds;
};

export const timeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
