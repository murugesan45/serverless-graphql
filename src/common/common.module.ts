import {Module} from '@nestjs/common';
import {EncryptionAndDecryption} from './EncryptionAndDecryption';

@Module({
  providers: [EncryptionAndDecryption],
})
export class CommonModule {}

