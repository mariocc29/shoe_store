import React, { useEffect, useRef } from "react";
import { w3cwebsocket as WebSocket } from 'websocket';

import { config } from "@/config";

export const useWebSocket = (onMessageCallback) => {
  const wsRef = useRef(null);

  useEffect(() => {
    if (!wsRef.current) {
      const ws = new WebSocket(config.SHOES_STORE_WS.URI);
      wsRef.current = ws;
      
      ws.onopen = () => {
        console.log('WebSocket connection opened.');
      
        const subscribe_msg = {
          command: 'subscribe',
          identifier: JSON.stringify({channel: config.SHOES_STORE_WS.CHANNEL}),
        };
        
        ws.send(JSON.stringify(subscribe_msg));
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed.');
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        
        if (message.type === "ping") { return; }
        if (message.type === "welcome") { return; }
        if (message.type === "confirm_subscription") { return; }
      
        onMessageCallback(message['message']);
      };
    }
  }, [onMessageCallback])

  return wsRef;
}