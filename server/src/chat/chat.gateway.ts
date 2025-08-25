import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(3001, {
  namespace: 'chat',
  cors: {
    origin: 'http://localhost:5173',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    client.broadcast.emit('user-connect', `CLIENT CONNECTED (${client.id})`);
  }

  handleDisconnect(client: Socket) {
    client.broadcast.emit(
      'user-disconnect',
      `CLIENT DISCONNECTED (${client.id})`,
    );
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string) {
    client.broadcast.emit('reply', {
      id: client.id,
      message: payload,
    });
  }
}
