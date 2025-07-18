# Definición de entidades del módulo _agency

## Entidad: agency

**Descripción:** Representa una agencia que gestiona campañas e influencers.

**Atributos:**
- `id: string`
- `name: string`
- `description: string`
- `address: string`
- `phone: string`
- `email: string`
- `website: string`
- `createdAt: Date`
- `updatedAt: Date`

## Entidad: influencer

**Descripción:** Persona que colabora con la agencia para campañas de marketing.

**Atributos:**
- `id: string`
- `name: string`
- `username: string`
- `email: string`
- `phone: string`
- `bio: string`
- `avatarUrl: string`
- `socialNetworks: SocialNetwork[]`
- `categories: string[]`
- `agencyId: string`
- `createdAt: Date`
- `updatedAt: Date`

## Entidad: campaign

**Descripción:** Campaña de marketing gestionada por la agencia.

**Atributos:**
- `id: string`
- `name: string`
- `description: string`
- `startDate: Date`
- `endDate: Date`
- `budget: number`
- `agencyId: string`
- `brandId: string`
- `influencers: string[]`
- `status: string`
- `tasks: string[]`
- `goals: string[]`
- `createdAt: Date`
- `updatedAt: Date`

## Entidad: task

**Descripción:** Tarea calendarizada dentro de una campaña.

**Atributos:**
- `id: string`
- `campaignId: string`
- `title: string`
- `description: string`
- `assignedTo: string`
- `dueDate: Date`
- `status: string`
- `createdAt: Date`
- `updatedAt: Date`

## Entidad: goal

**Descripción:** Objetivo específico de una campaña.

**Atributos:**
- `id: string`
- `campaignId: string`
- `description: string`
- `metric: string`
- `targetValue: number`
- `currentValue: number`
- `achieved: boolean`

## Entidad: brand

**Descripción:** Marca que contrata a la agencia para campañas de influencers.

**Atributos:**
- `id: string`
- `name: string`
- `description: string`
- `website: string`
- `contactEmail: string`
- `contactPhone: string`
- `createdAt: Date`
- `updatedAt: Date`

## Entidad: contract

**Descripción:** Contrato entre la agencia y la marca para una campaña.

**Atributos:**
- `id: string`
- `brandId: string`
- `agencyId: string`
- `campaignId: string`
- `startDate: Date`
- `endDate: Date`
- `terms: string`
- `amount: number`
- `status: string`
- `createdAt: Date`
- `updatedAt: Date`

## Entidad: campaignTracking

**Descripción:** Registro de la evolución y métricas de una campaña.

**Atributos:**
- `id: string`
- `campaignId: string`
- `date: Date`
- `impressions: number`
- `clicks: number`
- `engagement: number`
- `reach: number`
- `notes: string`

## Entidad: expense

**Descripción:** Gasto asociado a una campaña, agencia o contrato.

**Atributos:**
- `id: string`
- `type: string` — Tipo de gasto (ej: publicidad, pago influencer, logística)
- `amount: number`
- `currency: string`
- `date: Date`
- `description: string`
- `campaignId: string` — Opcional, si el gasto está ligado a una campaña
- `agencyId: string` — Opcional, si el gasto está ligado a la agencia
- `contractId: string` — Opcional, si el gasto está ligado a un contrato
- `createdAt: Date`
- `updatedAt: Date`


## Entidad: income

**Descripción:** Registro de ingresos recibidos por la agencia, campaña o contrato.

**Atributos:**
- `id: string`
- `type: string` — Tipo de ingreso (ej: pago marca, patrocinio, comisión)
- `amount: number`
- `currency: string`
- `date: Date`
- `description: string`
- `campaignId: string` — Opcional, si el ingreso está ligado a una campaña
- `agencyId: string` — Opcional, si el ingreso está ligado a la agencia
- `contractId: string` — Opcional, si el ingreso está ligado a un contrato
- `createdAt: Date`
- `updatedAt: Date`
