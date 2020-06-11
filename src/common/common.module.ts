import {Module} from '@nestjs/common';
import {EncryptionAndDecryption} from './EncryptionAndDecryption';

@Module({
  providers:[EncryptionAndDecryption],
  exports:[EncryptionAndDecryption]
})
export class CommonModule {}

