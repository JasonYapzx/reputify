// hooks/useAuthToken.ts
'use client'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useState } from 'react';

export const useAuthToken = () => {
    const [token, setToken] = useState('');
    const { authToken } = useDynamicContext();

    return authToken;
};

