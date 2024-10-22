import {
  BaileysEventEmitter,
  Chat,
  Contact,
  proto,
} from '@adiwajshing/baileys';
import { Label } from '@adiwajshing/baileys/lib/Types/Label';
import { PaginationParams } from '@waha/structures/pagination.dto';

export interface INowebStore {
  presences: any;

  init(): Promise<void>;

  close(): Promise<void>;

  bind(ev: BaileysEventEmitter, socket: any): void;

  loadMessage(jid: string, id: string): Promise<proto.IWebMessageInfo>;

  getMessagesByJid(chatId: string, limit: number): Promise<any>;

  getChats(pagination: PaginationParams): Promise<Chat[]>;

  getContacts(pagination: PaginationParams): Promise<Contact[]>;

  getContactById(jid: string): Promise<Contact>;

  getLabels(): Promise<Label[]>;

  getLabelById(labelId: string): Promise<Label | null>;

  getChatsByLabelId(labelId: string): Promise<Chat[]>;

  getChatLabels(chatId: string): Promise<Label[]>;
}
