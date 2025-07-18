import { container } from "tsyringe";
import { IAgencyRepository } from "@/_agency/_back/agency/domain/agency.repository.interface";
import { AgencyRepositoryImpl } from "@/_agency/_back/agency/infra/agency.repository";

import { IInfluencerRepository } from "@/_agency/_back/influencer/domain/influencer.repository.interface";
import { InfluencerRepositoryImpl } from "@/_agency/_back/influencer/infra/influencer.repository";

container.registerSingleton<IAgencyRepository>("IAgencyRepository", AgencyRepositoryImpl);

container.registerSingleton<IInfluencerRepository>("IInfluencerRepository", InfluencerRepositoryImpl);

import { ICampaignRepository } from "@/_agency/_back/campaign/domain/campaign.repository.interface";
import { CampaignRepositoryImpl } from "@/_agency/_back/campaign/infra/campaign.repository";

container.registerSingleton<ICampaignRepository>("ICampaignRepository", CampaignRepositoryImpl);

import { ITaskRepository } from "@/_agency/_back/task/domain/task.repository.interface";
import { TaskRepositoryImpl } from "@/_agency/_back/task/infra/task.repository";

container.registerSingleton<ITaskRepository>("ITaskRepository", TaskRepositoryImpl);

import { IGoalRepository } from "@/_agency/_back/goal/domain/goal.repository.interface";
import { GoalRepositoryImpl } from "@/_agency/_back/goal/infra/goal.repository";

container.registerSingleton<IGoalRepository>("IGoalRepository", GoalRepositoryImpl);

import { IBrandRepository } from "@/_agency/_back/brand/domain/brand.repository.interface";
import { BrandRepositoryImpl } from "@/_agency/_back/brand/infra/brand.repository";

container.registerSingleton<IBrandRepository>("IBrandRepository", BrandRepositoryImpl);

import { IContractRepository } from "@/_agency/_back/contract/domain/contract.repository.interface";
import { ContractRepositoryImpl } from "@/_agency/_back/contract/infra/contract.repository";

container.registerSingleton<IContractRepository>("IContractRepository", ContractRepositoryImpl);

import { ICampaignTrackingRepository } from "@/_agency/_back/campaignTracking/domain/campaignTracking.repository.interface";
import { CampaignTrackingRepositoryImpl } from "@/_agency/_back/campaignTracking/infra/campaignTracking.repository";

container.registerSingleton<ICampaignTrackingRepository>("ICampaignTrackingRepository", CampaignTrackingRepositoryImpl);

import { IExpenseRepository } from "@/_agency/_back/expense/domain/expense.repository.interface";
import { ExpenseRepository } from "@/_agency/_back/expense/infra/expense.repository";

container.registerSingleton<IExpenseRepository>("IExpenseRepository", ExpenseRepository);

import { IIncomeRepository } from "@/_agency/_back/income/domain/income.repository.interface";
import { IncomeRepository } from "@/_agency/_back/income/infra/income.repository";

container.registerSingleton<IIncomeRepository>("IIncomeRepository", IncomeRepository);
