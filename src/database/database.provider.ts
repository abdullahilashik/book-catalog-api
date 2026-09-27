import {ConfigService} from '@nestjs/config';
import { createClient } from '@libsql/client';
import {drizzle} from 'drizzle-orm/libsql';
import * as schema from './schema';
import {DRIZZLE} from './database.constants';

export const drizzleProvider = {
    provide: DRIZZLE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        const url = configService.get<string>('DATABASE_URL') || 'file:local.db';

        const client = createClient({
            url
        });

        return drizzle(client, {schema});
    }
}