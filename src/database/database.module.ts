import {Global, Module} from '@nestjs/common';
import {DRIZZLE} from './database.constants';
import { drizzleProvider } from './database.provider';

@Global()
@Module({
    providers: [drizzleProvider],
    exports: [DRIZZLE]
})

export class DatabaseModule {}
