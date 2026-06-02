import { PrismaClient, UserRole } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const superAdminEmail = process.env.SEED_ADMIN_EMAIL ?? 'admin@balkon.cl';
  const superAdminPassword = process.env.SEED_ADMIN_PASSWORD ?? 'Admin@Balkon2024!';

  const existing = await prisma.user.findUnique({ where: { email: superAdminEmail } });
  if (!existing) {
    const passwordHash = await argon2.hash(superAdminPassword);
    await prisma.user.create({
      data: {
        name: 'Super Administrador',
        email: superAdminEmail,
        passwordHash,
        role: UserRole.SUPER_ADMIN,
        isActive: true,
      },
    });
    console.log(`Super admin created: ${superAdminEmail}`);
  } else {
    console.log('Super admin already exists, skipping.');
  }

  // Default settings
  const defaultSettings = [
    { key: 'company.name', value: 'Construcciones CJ', group: 'company', label: 'Company Name' },
    { key: 'company.legalName', value: 'Construcciones CJ SpA', group: 'company', label: 'Legal Name' },
    { key: 'company.email', value: 'contacto@balkon.cl', group: 'company', label: 'Contact Email' },
    { key: 'company.phone', value: '+56 9 0000 0000', group: 'company', label: 'Phone' },
    { key: 'company.country', value: 'Chile', group: 'company', label: 'Country' },
    { key: 'seo.title', value: 'BALKON | Construcciones CJ', group: 'seo', label: 'Site Title' },
    { key: 'seo.description', value: 'Empresa de construcción y remodelación en Chile.', group: 'seo', label: 'Meta Description' },
    { key: 'seo.indexing', value: true, group: 'seo', label: 'Allow Indexing' },
    { key: 'security.maxLoginAttempts', value: 5, group: 'security', label: 'Max Login Attempts' },
    { key: 'security.sessionTimeout', value: 60, group: 'security', label: 'Session Timeout (min)' },
  ];

  for (const setting of defaultSettings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: { ...setting, value: setting.value as never },
    });
  }

  console.log('Default settings seeded.');
  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
