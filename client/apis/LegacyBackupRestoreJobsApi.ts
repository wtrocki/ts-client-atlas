// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiError } from '../models/ApiError';
import { BackupRestoreJob } from '../models/BackupRestoreJob';
import { PaginatedRestoreJob } from '../models/PaginatedRestoreJob';

/**
 * no description
 */
export class LegacyBackupRestoreJobsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Restores one legacy backup for one cluster in the specified project. To use this resource, the requesting API Key must have the Project Owner role. Effective 23 March 2020, all new clusters can use only Cloud Backups. When you upgrade to 4.2, your backup system upgrades to cloud backup if it is currently set to legacy backup. After this upgrade, all your existing legacy backup snapshots remain available. They expire over time in accordance with your retention policy. Your backup policy resets to the default schedule. If you had a custom backup policy in place with legacy backups, you must re-create it with the procedure outlined in the [Cloud Backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/scheduling/#std-label-cloud-provider-backup-schedule). This endpoint doesn't support creating checkpoint restore jobs for sharded clusters, or creating restore jobs for queryable backup snapshots. If you create an automated restore job by specifying `delivery.methodName` of `AUTOMATED_RESTORE` in your request body, MongoDB Cloud removes all existing data on the target cluster prior to the restore.
     * Create One Legacy Backup Restore Job
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param clusterName Human-readable label that identifies the cluster with the snapshot you want to return.
     * @param backupRestoreJob Legacy backup to restore to one cluster in the specified project.
     */
    public async createLegacyBackupRestoreJob(groupId: string, clusterName: string, backupRestoreJob: BackupRestoreJob, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("LegacyBackupRestoreJobsApi", "createLegacyBackupRestoreJob", "groupId");
        }


        // verify required parameter 'clusterName' is not null or undefined
        if (clusterName === null || clusterName === undefined) {
            throw new RequiredError("LegacyBackupRestoreJobsApi", "createLegacyBackupRestoreJob", "clusterName");
        }


        // verify required parameter 'backupRestoreJob' is not null or undefined
        if (backupRestoreJob === null || backupRestoreJob === undefined) {
            throw new RequiredError("LegacyBackupRestoreJobsApi", "createLegacyBackupRestoreJob", "backupRestoreJob");
        }


        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/clusters/{clusterName}/restoreJobs'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'clusterName' + '}', encodeURIComponent(String(clusterName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept","application/vnd.atlas.2023-01-01+json")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/vnd.atlas.2023-01-01+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(backupRestoreJob, "BackupRestoreJob", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LegacyBackupRestoreJobsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLegacyBackupRestoreJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createLegacyBackupRestoreJob(response: ResponseContext): Promise<PaginatedRestoreJob > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedRestoreJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedRestoreJob", ""
            ) as PaginatedRestoreJob;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request.", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found.", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginatedRestoreJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedRestoreJob", ""
            ) as PaginatedRestoreJob;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
