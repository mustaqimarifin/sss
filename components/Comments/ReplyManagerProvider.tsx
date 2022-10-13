import type * as api from 'api';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface ReplyManagerContextApi {
  children?: React.ReactNode;
  replyingTo: api.Comment | null;
  setReplyingTo: (comment: api.Comment | null) => void;
}

const ReplyManagerContext = createContext<ReplyManagerContextApi | null>(null);

export const useReplyManager = () => {
  return useContext(ReplyManagerContext);
};

const ReplyManagerProvider = ({ children }: any) => {
  const [replyingTo, setReplyingTo] = useState<api.Comment | null>(null);

  const api = useMemo(
    () => ({
      replyingTo,
      setReplyingTo
    }),
    [replyingTo, setReplyingTo]
  );
  return (
    <ReplyManagerContext.Provider value={api}>
      {children}
    </ReplyManagerContext.Provider>
  );
};

export default ReplyManagerProvider;
