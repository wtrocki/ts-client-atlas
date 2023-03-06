// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiDatabaseView } from '../models/ApiDatabaseView';
import { ApiDiskPartitionView } from '../models/ApiDiskPartitionView';
import { ApiError } from '../models/ApiError';
import { ApiFTSMetricsView } from '../models/ApiFTSMetricsView';
import { ApiHostViewAtlas } from '../models/ApiHostViewAtlas';
import { ApiMeasurementsGeneralViewAtlas } from '../models/ApiMeasurementsGeneralViewAtlas';
import { ApiMeasurementsIndexesView } from '../models/ApiMeasurementsIndexesView';
import { ApiMeasurementsNonIndexView } from '../models/ApiMeasurementsNonIndexView';
import { PaginatedDatabaseView } from '../models/PaginatedDatabaseView';
import { PaginatedDiskPartitionView } from '../models/PaginatedDiskPartitionView';
import { PaginatedHostViewAtlas } from '../models/PaginatedHostViewAtlas';

/**
 * no description
 */
export class MonitoringAndLogsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the processes for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One MongoDB Process by ID
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getAtlasProcess(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getAtlasProcess", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getAtlasProcess", "processId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns one database running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return One Database for a MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database that the specified MongoDB process serves.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async getDatabase(groupId: string, databaseName: string, processId: string, envelope?: boolean, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDatabase", "groupId");
        }


        // verify required parameter 'databaseName' is not null or undefined
        if (databaseName === null || databaseName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDatabase", "databaseName");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDatabase", "processId");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/databases/{databaseName}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'databaseName' + '}', encodeURIComponent(String(databaseName)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the measurements of one database for the specified host for the specified project. Returns the database's on-disk storage space based on the MongoDB `dbStats` command output. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Database for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param databaseName Human-readable label that identifies the database that the specified MongoDB process serves.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     */
    public async getDatabaseMeasurements(groupId: string, databaseName: string, processId: string, envelope?: boolean, pretty?: boolean, m?: Set<'DATABASE_AVERAGE_OBJECT_SIZE' | 'DATABASE_COLLECTION_COUNT' | 'DATABASE_DATA_SIZE' | 'DATABASE_STORAGE_SIZE' | 'DATABASE_INDEX_SIZE' | 'DATABASE_INDEX_COUNT' | 'DATABASE_EXTENT_COUNT' | 'DATABASE_OBJECT_COUNT' | 'DATABASE_VIEW_COUNT'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDatabaseMeasurements", "groupId");
        }


        // verify required parameter 'databaseName' is not null or undefined
        if (databaseName === null || databaseName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDatabaseMeasurements", "databaseName");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDatabaseMeasurements", "processId");
        }





        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/databases/{databaseName}/measurements'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'databaseName' + '}', encodeURIComponent(String(databaseName)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }

        // Query Params
        if (m !== undefined) {
            requestContext.setQueryParam("m", ObjectSerializer.serialize(m, "Set<'DATABASE_AVERAGE_OBJECT_SIZE' | 'DATABASE_COLLECTION_COUNT' | 'DATABASE_DATA_SIZE' | 'DATABASE_STORAGE_SIZE' | 'DATABASE_INDEX_SIZE' | 'DATABASE_INDEX_COUNT' | 'DATABASE_EXTENT_COUNT' | 'DATABASE_OBJECT_COUNT' | 'DATABASE_VIEW_COUNT'>", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process  To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Disk for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param partitionName Human-readable label of the disk or partition to which the measurements apply.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     */
    public async getDiskMeasurements(groupId: string, partitionName: string, processId: string, envelope?: boolean, pretty?: boolean, m?: Set<'DISK_PARTITION_IOPS_READ' | 'MAX_DISK_PARTITION_IOPS_READ' | 'DISK_PARTITION_IOPS_WRITE' | 'MAX_DISK_PARTITION_IOPS_WRITE' | 'DISK_PARTITION_IOPS_TOTAL' | 'MAX_DISK_PARTITION_IOPS_TOTAL' | 'DISK_PARTITION_UTILIZATION' | 'MAX_DISK_PARTITION_UTILIZATION' | 'DISK_PARTITION_LATENCY_READ' | 'MAX_DISK_PARTITION_LATENCY_READ' | 'DISK_PARTITION_LATENCY_WRITE' | 'MAX_DISK_PARTITION_LATENCY_WRITE' | 'DISK_PARTITION_SPACE_FREE' | 'MAX_DISK_PARTITION_SPACE_FREE' | 'DISK_PARTITION_SPACE_USED' | 'MAX_DISK_PARTITION_SPACE_USED' | 'DISK_PARTITION_SPACE_PERCENT_FREE' | 'MAX_DISK_PARTITION_SPACE_PERCENT_FREE' | 'DISK_PARTITION_SPACE_PERCENT_USED' | 'MAX_DISK_PARTITION_SPACE_PERCENT_USED'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDiskMeasurements", "groupId");
        }


        // verify required parameter 'partitionName' is not null or undefined
        if (partitionName === null || partitionName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDiskMeasurements", "partitionName");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getDiskMeasurements", "processId");
        }





        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/disks/{partitionName}/measurements'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'partitionName' + '}', encodeURIComponent(String(partitionName)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }

        // Query Params
        if (m !== undefined) {
            requestContext.setQueryParam("m", ObjectSerializer.serialize(m, "Set<'DISK_PARTITION_IOPS_READ' | 'MAX_DISK_PARTITION_IOPS_READ' | 'DISK_PARTITION_IOPS_WRITE' | 'MAX_DISK_PARTITION_IOPS_WRITE' | 'DISK_PARTITION_IOPS_TOTAL' | 'MAX_DISK_PARTITION_IOPS_TOTAL' | 'DISK_PARTITION_UTILIZATION' | 'MAX_DISK_PARTITION_UTILIZATION' | 'DISK_PARTITION_LATENCY_READ' | 'MAX_DISK_PARTITION_LATENCY_READ' | 'DISK_PARTITION_LATENCY_WRITE' | 'MAX_DISK_PARTITION_LATENCY_WRITE' | 'DISK_PARTITION_SPACE_FREE' | 'MAX_DISK_PARTITION_SPACE_FREE' | 'DISK_PARTITION_SPACE_USED' | 'MAX_DISK_PARTITION_SPACE_USED' | 'DISK_PARTITION_SPACE_PERCENT_FREE' | 'MAX_DISK_PARTITION_SPACE_PERCENT_FREE' | 'DISK_PARTITION_SPACE_PERCENT_USED' | 'MAX_DISK_PARTITION_SPACE_PERCENT_USED'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a compressed (.gz) log file that contains a range of log messages for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Owner or Project Data Access Read Write roles. This resource doesn't require the API Key to have an Access List. Deprecated versions: v2-{2023-01-01}
     * Download Logs for One Multi-Cloud Cluster Host in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param hostName Fully qualified domain name or IP address of the MongoDB host that stores the log files that you want to download.
     * @param logName Human-readable label of the log file that you want to return. You can return audit logs only if you enable Database Auditing for the specified project.
     * @param endDate Date and time when the period specifies the inclusive ending point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     * @param startDate Date and time when the period specifies the inclusive starting point for the range of log messages to retrieve. This parameter expresses its value in the number of seconds that have elapsed since the UNIX epoch.
     */
    public async getHostLogs(groupId: string, hostName: string, logName: 'mongodb' | 'mongos' | 'mongodb-audit-log' | 'mongos-audit-log', endDate?: number, startDate?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getHostLogs", "groupId");
        }


        // verify required parameter 'hostName' is not null or undefined
        if (hostName === null || hostName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getHostLogs", "hostName");
        }


        // verify required parameter 'logName' is not null or undefined
        if (logName === null || logName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getHostLogs", "logName");
        }




        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/clusters/{hostName}/logs/{logName}.gz'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'hostName' + '}', encodeURIComponent(String(hostName)))
            .replace('{' + 'logName' + '}', encodeURIComponent(String(logName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "number", "int64"));
        }

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "number", "int64"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns measurements of the disk or partition per process for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     * @param m One or more types of measurement to request for this MongoDB process. If omitted, the resource returns all measurements. To specify multiple values for &#x60;m&#x60;, repeat the &#x60;m&#x60; parameter for each value. Specify measurements that apply to the specified host. MongoDB Cloud returns an error if you specified any invalid measurements.
     * @param period Date and time that indicates how far in the past to query. You can&#39;t set this value with **start** and **end** in the same request. This parameter expresses its value in the ISO 8601 duration format in UTC
     */
    public async getHostMeasurements(groupId: string, processId: string, envelope?: boolean, pretty?: boolean, m?: Set<'ASSERT_MSG' | 'ASSERT_REGULAR' | 'ASSERT_USER' | 'ASSERT_WARNING' | 'BACKGROUND_FLUSH_AVG' | 'CACHE_BYTES_READ_INTO' | 'CACHE_BYTES_WRITTEN_FROM' | 'CACHE_DIRTY_BYTES' | 'CACHE_USED_BYTES' | 'COMPUTED_MEMORY' | 'CONNECTIONS' | 'CURSORS_TOTAL_OPEN' | 'CURSORS_TOTAL_TIMED_OUT' | 'DB_DATA_SIZE_TOTAL' | 'DB_STORAGE_TOTAL' | 'DOCUMENT_METRICS_DELETED' | 'DOCUMENT_METRICS_INSERTED' | 'DOCUMENT_METRICS_RETURNED' | 'DOCUMENT_METRICS_UPDATED' | 'EXTRA_INFO_PAGE_FAULTS' | 'FTS_DISK_UTILIZATION' | 'FTS_MEMORY_MAPPED' | 'FTS_MEMORY_RESIDENT' | 'FTS_MEMORY_VIRTUAL' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'GLOBAL_ACCESSES_NOT_IN_MEMORY' | 'GLOBAL_LOCK_CURRENT_QUEUE_READERS' | 'GLOBAL_LOCK_CURRENT_QUEUE_TOTAL' | 'GLOBAL_LOCK_CURRENT_QUEUE_WRITERS' | 'GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN' | 'INDEX_COUNTERS_BTREE_ACCESSES' | 'INDEX_COUNTERS_BTREE_HITS' | 'INDEX_COUNTERS_BTREE_MISS_RATIO' | 'INDEX_COUNTERS_BTREE_MISSES' | 'JOURNALING_COMMITS_IN_WRITE_LOCK' | 'JOURNALING_MB' | 'JOURNALING_WRITE_DATA_FILES_MB' | 'MAX_PROCESS_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_CPU_CHILDREN_USER' | 'MAX_PROCESS_CPU_KERNEL' | 'MAX_PROCESS_CPU_USER' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'MAX_PROCESS_NORMALIZED_CPU_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_USER' | 'MAX_SWAP_USAGE_FREE' | 'MAX_SWAP_USAGE_USED ' | 'MAX_SYSTEM_CPU_GUEST' | 'MAX_SYSTEM_CPU_IOWAIT' | 'MAX_SYSTEM_CPU_IRQ' | 'MAX_SYSTEM_CPU_KERNEL' | 'MAX_SYSTEM_CPU_SOFTIRQ' | 'MAX_SYSTEM_CPU_STEAL' | 'MAX_SYSTEM_CPU_USER' | 'MAX_SYSTEM_MEMORY_AVAILABLE' | 'MAX_SYSTEM_MEMORY_FREE' | 'MAX_SYSTEM_MEMORY_USED' | 'MAX_SYSTEM_NETWORK_IN' | 'MAX_SYSTEM_NETWORK_OUT' | 'MAX_SYSTEM_NORMALIZED_CPU_GUEST' | 'MAX_SYSTEM_NORMALIZED_CPU_IOWAIT' | 'MAX_SYSTEM_NORMALIZED_CPU_IRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_KERNEL' | 'MAX_SYSTEM_NORMALIZED_CPU_NICE' | 'MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_STEAL' | 'MAX_SYSTEM_NORMALIZED_CPU_USER' | 'MEMORY_MAPPED' | 'MEMORY_RESIDENT' | 'MEMORY_VIRTUAL' | 'NETWORK_BYTES_IN' | 'NETWORK_BYTES_OUT' | 'NETWORK_NUM_REQUESTS' | 'OP_EXECUTION_TIME_COMMANDS' | 'OP_EXECUTION_TIME_READS' | 'OP_EXECUTION_TIME_WRITES' | 'OPCOUNTER_CMD' | 'OPCOUNTER_DELETE' | 'OPCOUNTER_GETMORE' | 'OPCOUNTER_INSERT' | 'OPCOUNTER_QUERY' | 'OPCOUNTER_REPL_CMD' | 'OPCOUNTER_REPL_DELETE' | 'OPCOUNTER_REPL_INSERT' | 'OPCOUNTER_REPL_UPDATE' | 'OPCOUNTER_UPDATE' | 'OPERATIONS_SCAN_AND_ORDER' | 'OPLOG_MASTER_LAG_TIME_DIFF' | 'OPLOG_MASTER_TIME' | 'OPLOG_RATE_GB_PER_HOUR' | 'OPLOG_SLAVE_LAG_MASTER_TIME' | 'OPLOG_REPLICATION_LAG' | 'PROCESS_CPU_CHILDREN_KERNEL' | 'PROCESS_CPU_CHILDREN_USER' | 'PROCESS_CPU_KERNEL' | 'PROCESS_CPU_USER' | 'PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'PROCESS_NORMALIZED_CPU_KERNEL' | 'PROCESS_NORMALIZED_CPU_USER' | 'QUERY_EXECUTOR_SCANNED' | 'QUERY_EXECUTOR_SCANNED_OBJECTS' | 'QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED' | 'QUERY_TARGETING_SCANNED_PER_RETURNED' | 'RESTARTS_IN_LAST_HOUR' | 'SWAP_USAGE_FREE' | 'SWAP_USAGE_USED' | 'SYSTEM_CPU_GUEST' | 'SYSTEM_CPU_IOWAIT' | 'SYSTEM_CPU_IRQ' | 'SYSTEM_CPU_KERNEL' | 'SYSTEM_CPU_NICE' | 'SYSTEM_CPU_SOFTIRQ' | 'SYSTEM_CPU_STEAL' | 'SYSTEM_CPU_USER' | 'SYSTEM_MEMORY_AVAILABLE' | 'SYSTEM_MEMORY_FREE' | 'SYSTEM_MEMORY_USED' | 'SYSTEM_NETWORK_IN' | 'SYSTEM_NETWORK_OUT' | 'SYSTEM_NORMALIZED_CPU_GUEST' | 'SYSTEM_NORMALIZED_CPU_IOWAIT' | 'SYSTEM_NORMALIZED_CPU_IRQ' | 'SYSTEM_NORMALIZED_CPU_KERNEL' | 'SYSTEM_NORMALIZED_CPU_NICE' | 'SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'SYSTEM_NORMALIZED_CPU_STEAL' | 'SYSTEM_NORMALIZED_CPU_USER' | 'TICKETS_AVAILABLE_READS' | 'TICKETS_AVAILABLE_WRITE'>, period?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getHostMeasurements", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getHostMeasurements", "processId");
        }






        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/measurements'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }

        // Query Params
        if (m !== undefined) {
            requestContext.setQueryParam("m", ObjectSerializer.serialize(m, "Set<'ASSERT_MSG' | 'ASSERT_REGULAR' | 'ASSERT_USER' | 'ASSERT_WARNING' | 'BACKGROUND_FLUSH_AVG' | 'CACHE_BYTES_READ_INTO' | 'CACHE_BYTES_WRITTEN_FROM' | 'CACHE_DIRTY_BYTES' | 'CACHE_USED_BYTES' | 'COMPUTED_MEMORY' | 'CONNECTIONS' | 'CURSORS_TOTAL_OPEN' | 'CURSORS_TOTAL_TIMED_OUT' | 'DB_DATA_SIZE_TOTAL' | 'DB_STORAGE_TOTAL' | 'DOCUMENT_METRICS_DELETED' | 'DOCUMENT_METRICS_INSERTED' | 'DOCUMENT_METRICS_RETURNED' | 'DOCUMENT_METRICS_UPDATED' | 'EXTRA_INFO_PAGE_FAULTS' | 'FTS_DISK_UTILIZATION' | 'FTS_MEMORY_MAPPED' | 'FTS_MEMORY_RESIDENT' | 'FTS_MEMORY_VIRTUAL' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'GLOBAL_ACCESSES_NOT_IN_MEMORY' | 'GLOBAL_LOCK_CURRENT_QUEUE_READERS' | 'GLOBAL_LOCK_CURRENT_QUEUE_TOTAL' | 'GLOBAL_LOCK_CURRENT_QUEUE_WRITERS' | 'GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN' | 'INDEX_COUNTERS_BTREE_ACCESSES' | 'INDEX_COUNTERS_BTREE_HITS' | 'INDEX_COUNTERS_BTREE_MISS_RATIO' | 'INDEX_COUNTERS_BTREE_MISSES' | 'JOURNALING_COMMITS_IN_WRITE_LOCK' | 'JOURNALING_MB' | 'JOURNALING_WRITE_DATA_FILES_MB' | 'MAX_PROCESS_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_CPU_CHILDREN_USER' | 'MAX_PROCESS_CPU_KERNEL' | 'MAX_PROCESS_CPU_USER' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'MAX_PROCESS_NORMALIZED_CPU_KERNEL' | 'MAX_PROCESS_NORMALIZED_CPU_USER' | 'MAX_SWAP_USAGE_FREE' | 'MAX_SWAP_USAGE_USED ' | 'MAX_SYSTEM_CPU_GUEST' | 'MAX_SYSTEM_CPU_IOWAIT' | 'MAX_SYSTEM_CPU_IRQ' | 'MAX_SYSTEM_CPU_KERNEL' | 'MAX_SYSTEM_CPU_SOFTIRQ' | 'MAX_SYSTEM_CPU_STEAL' | 'MAX_SYSTEM_CPU_USER' | 'MAX_SYSTEM_MEMORY_AVAILABLE' | 'MAX_SYSTEM_MEMORY_FREE' | 'MAX_SYSTEM_MEMORY_USED' | 'MAX_SYSTEM_NETWORK_IN' | 'MAX_SYSTEM_NETWORK_OUT' | 'MAX_SYSTEM_NORMALIZED_CPU_GUEST' | 'MAX_SYSTEM_NORMALIZED_CPU_IOWAIT' | 'MAX_SYSTEM_NORMALIZED_CPU_IRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_KERNEL' | 'MAX_SYSTEM_NORMALIZED_CPU_NICE' | 'MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'MAX_SYSTEM_NORMALIZED_CPU_STEAL' | 'MAX_SYSTEM_NORMALIZED_CPU_USER' | 'MEMORY_MAPPED' | 'MEMORY_RESIDENT' | 'MEMORY_VIRTUAL' | 'NETWORK_BYTES_IN' | 'NETWORK_BYTES_OUT' | 'NETWORK_NUM_REQUESTS' | 'OP_EXECUTION_TIME_COMMANDS' | 'OP_EXECUTION_TIME_READS' | 'OP_EXECUTION_TIME_WRITES' | 'OPCOUNTER_CMD' | 'OPCOUNTER_DELETE' | 'OPCOUNTER_GETMORE' | 'OPCOUNTER_INSERT' | 'OPCOUNTER_QUERY' | 'OPCOUNTER_REPL_CMD' | 'OPCOUNTER_REPL_DELETE' | 'OPCOUNTER_REPL_INSERT' | 'OPCOUNTER_REPL_UPDATE' | 'OPCOUNTER_UPDATE' | 'OPERATIONS_SCAN_AND_ORDER' | 'OPLOG_MASTER_LAG_TIME_DIFF' | 'OPLOG_MASTER_TIME' | 'OPLOG_RATE_GB_PER_HOUR' | 'OPLOG_SLAVE_LAG_MASTER_TIME' | 'OPLOG_REPLICATION_LAG' | 'PROCESS_CPU_CHILDREN_KERNEL' | 'PROCESS_CPU_CHILDREN_USER' | 'PROCESS_CPU_KERNEL' | 'PROCESS_CPU_USER' | 'PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL' | 'PROCESS_NORMALIZED_CPU_CHILDREN_USER' | 'PROCESS_NORMALIZED_CPU_KERNEL' | 'PROCESS_NORMALIZED_CPU_USER' | 'QUERY_EXECUTOR_SCANNED' | 'QUERY_EXECUTOR_SCANNED_OBJECTS' | 'QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED' | 'QUERY_TARGETING_SCANNED_PER_RETURNED' | 'RESTARTS_IN_LAST_HOUR' | 'SWAP_USAGE_FREE' | 'SWAP_USAGE_USED' | 'SYSTEM_CPU_GUEST' | 'SYSTEM_CPU_IOWAIT' | 'SYSTEM_CPU_IRQ' | 'SYSTEM_CPU_KERNEL' | 'SYSTEM_CPU_NICE' | 'SYSTEM_CPU_SOFTIRQ' | 'SYSTEM_CPU_STEAL' | 'SYSTEM_CPU_USER' | 'SYSTEM_MEMORY_AVAILABLE' | 'SYSTEM_MEMORY_FREE' | 'SYSTEM_MEMORY_USED' | 'SYSTEM_NETWORK_IN' | 'SYSTEM_NETWORK_OUT' | 'SYSTEM_NORMALIZED_CPU_GUEST' | 'SYSTEM_NORMALIZED_CPU_IOWAIT' | 'SYSTEM_NORMALIZED_CPU_IRQ' | 'SYSTEM_NORMALIZED_CPU_KERNEL' | 'SYSTEM_NORMALIZED_CPU_NICE' | 'SYSTEM_NORMALIZED_CPU_SOFTIRQ' | 'SYSTEM_NORMALIZED_CPU_STEAL' | 'SYSTEM_NORMALIZED_CPU_USER' | 'TICKETS_AVAILABLE_READS' | 'TICKETS_AVAILABLE_WRITE'>", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "Date", "date-time"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the Atlas Search metrics data series within the provided time range for one namespace and index name on the specified process.
     * Return Atlas Search Metrics for One Index in One Specified Namespace
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param indexName Human-readable label that identifies the index.
     * @param databaseName Human-readable label that identifies the database.
     * @param collectionName Human-readable label that identifies the collection.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the measurements that MongoDB Atlas reports for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async getIndexMetrics(processId: string, indexName: string, databaseName: string, collectionName: string, groupId: string, granularity: string, metrics: Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>, period?: string, start?: Date, end?: Date, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "processId");
        }


        // verify required parameter 'indexName' is not null or undefined
        if (indexName === null || indexName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "indexName");
        }


        // verify required parameter 'databaseName' is not null or undefined
        if (databaseName === null || databaseName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "databaseName");
        }


        // verify required parameter 'collectionName' is not null or undefined
        if (collectionName === null || collectionName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "collectionName");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "groupId");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "granularity");
        }


        // verify required parameter 'metrics' is not null or undefined
        if (metrics === null || metrics === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getIndexMetrics", "metrics");
        }






        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics/indexes/{databaseName}/{collectionName}/{indexName}/measurements'
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)))
            .replace('{' + 'indexName' + '}', encodeURIComponent(String(indexName)))
            .replace('{' + 'databaseName' + '}', encodeURIComponent(String(databaseName)))
            .replace('{' + 'collectionName' + '}', encodeURIComponent(String(collectionName)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (granularity !== undefined) {
            requestContext.setQueryParam("granularity", ObjectSerializer.serialize(granularity, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "Date", "date-time"));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "Date", "date-time"));
        }

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (metrics !== undefined) {
            requestContext.setQueryParam("metrics", ObjectSerializer.serialize(metrics, "Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the Atlas Search hardware and status data series within the provided time range for one process in the specified project.
     * Return Atlas Search Hardware and Status Metrics
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the metrics that you want MongoDB Atlas to report for the associated data series. If you don&#39;t set this parameter, this resource returns all hardware and status metrics for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async getMeasurements(processId: string, groupId: string, granularity: string, metrics: Set<'FTS_DISK_USAGE' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'FTS_PROCESS_RESIDENT_MEMORY' | 'FTS_PROCESS_SHARED_MEMORY' | 'FTS_PROCESS_VIRTUAL_MEMORY' | 'JVM_CURRENT_MEMORY' | 'JVM_MAX_MEMORY'>, period?: string, start?: Date, end?: Date, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getMeasurements", "processId");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getMeasurements", "groupId");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getMeasurements", "granularity");
        }


        // verify required parameter 'metrics' is not null or undefined
        if (metrics === null || metrics === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "getMeasurements", "metrics");
        }






        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics/measurements'
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (granularity !== undefined) {
            requestContext.setQueryParam("granularity", ObjectSerializer.serialize(granularity, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "Date", "date-time"));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "Date", "date-time"));
        }

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (metrics !== undefined) {
            requestContext.setQueryParam("metrics", ObjectSerializer.serialize(metrics, "Set<'FTS_DISK_USAGE' | 'FTS_PROCESS_CPU_KERNEL' | 'FTS_PROCESS_CPU_USER' | 'FTS_PROCESS_NORMALIZED_CPU_KERNEL' | 'FTS_PROCESS_NORMALIZED_CPU_USER' | 'FTS_PROCESS_RESIDENT_MEMORY' | 'FTS_PROCESS_SHARED_MEMORY' | 'FTS_PROCESS_VIRTUAL_MEMORY' | 'JVM_CURRENT_MEMORY' | 'JVM_MAX_MEMORY'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns details of all processes for the specified project. A MongoDB process can be either a `mongod` or `mongos`. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return All MongoDB Processes in One Project
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async listAtlasProcesses(groupId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listAtlasProcesses", "groupId");
        }







        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (includeCount !== undefined) {
            requestContext.setQueryParam("includeCount", ObjectSerializer.serialize(includeCount, "boolean", ""));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the list of databases running on the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Available Databases for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async listDatabases(groupId: string, processId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDatabases", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDatabases", "processId");
        }







        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/databases'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (includeCount !== undefined) {
            requestContext.setQueryParam("includeCount", ObjectSerializer.serialize(includeCount, "boolean", ""));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the measurements of one disk or partition for the specified host for the specified project. Returned value can be one of the following: - Throughput of I/O operations for the disk partition used for the MongoDB process - Percentage of time during which requests the partition issued and serviced - Latency per operation type of the disk partition used for the MongoDB process - Amount of free and used disk space on the disk partition used for the MongoDB process   To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Measurements of One Disk
     * @param partitionName Human-readable label of the disk or partition to which the measurements apply.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listDiskMeasurements(partitionName: string, groupId: string, processId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'partitionName' is not null or undefined
        if (partitionName === null || partitionName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDiskMeasurements", "partitionName");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDiskMeasurements", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDiskMeasurements", "processId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/disks/{partitionName}'
            .replace('{' + 'partitionName' + '}', encodeURIComponent(String(partitionName)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the list of disks or partitions for the specified host for the specified project. To use this resource, the requesting API Key must have the Project Read Only role. This resource doesn't require the API Key to have an Access List.
     * Return Available Disks for One MongoDB Process
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param processId Combination of hostname and Internet Assigned Numbers Authority (IANA) port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (&#x60;mongod&#x60; or &#x60;mongos&#x60;). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     * @param includeCount Flag that indicates whether the response returns the total number of items (**totalCount**) in the response.
     * @param itemsPerPage Number of items that the response returns per page.
     * @param pageNum Number of the page that displays the current set of the total objects that the response returns.
     * @param pretty Flag that indicates whether the response body should be in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/Prettyprint\&quot; target&#x3D;\&quot;_blank\&quot; rel&#x3D;\&quot;noopener noreferrer\&quot;&gt;prettyprint&lt;/a&gt; format.
     */
    public async listDiskPartitions(groupId: string, processId: string, envelope?: boolean, includeCount?: boolean, itemsPerPage?: number, pageNum?: number, pretty?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDiskPartitions", "groupId");
        }


        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listDiskPartitions", "processId");
        }







        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/processes/{processId}/disks'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (includeCount !== undefined) {
            requestContext.setQueryParam("includeCount", ObjectSerializer.serialize(includeCount, "boolean", ""));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", ""));
        }

        // Query Params
        if (pageNum !== undefined) {
            requestContext.setQueryParam("pageNum", ObjectSerializer.serialize(pageNum, "number", ""));
        }

        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer.serialize(pretty, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the Atlas Search index metrics within the specified time range for one namespace in the specified process.
     * Return All Atlas Search Index Metrics for One Namespace
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param databaseName Human-readable label that identifies the database.
     * @param collectionName Human-readable label that identifies the collection.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param granularity Duration that specifies the interval at which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC.
     * @param metrics List that contains the measurements that MongoDB Atlas reports for the associated data series.
     * @param period Duration over which Atlas reports the metrics. This parameter expresses its value in the ISO 8601 duration format in UTC. Include this parameter when you do not set **start** and **end**.
     * @param start Date and time when MongoDB Cloud begins reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param end Date and time when MongoDB Cloud stops reporting the metrics. This parameter expresses its value in the ISO 8601 timestamp format in UTC. Include this parameter when you do not set **period**.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listIndexMetrics(processId: string, databaseName: string, collectionName: string, groupId: string, granularity: string, metrics: Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>, period?: string, start?: Date, end?: Date, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listIndexMetrics", "processId");
        }


        // verify required parameter 'databaseName' is not null or undefined
        if (databaseName === null || databaseName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listIndexMetrics", "databaseName");
        }


        // verify required parameter 'collectionName' is not null or undefined
        if (collectionName === null || collectionName === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listIndexMetrics", "collectionName");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listIndexMetrics", "groupId");
        }


        // verify required parameter 'granularity' is not null or undefined
        if (granularity === null || granularity === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listIndexMetrics", "granularity");
        }


        // verify required parameter 'metrics' is not null or undefined
        if (metrics === null || metrics === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listIndexMetrics", "metrics");
        }






        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics/indexes/{databaseName}/{collectionName}/measurements'
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)))
            .replace('{' + 'databaseName' + '}', encodeURIComponent(String(databaseName)))
            .replace('{' + 'collectionName' + '}', encodeURIComponent(String(collectionName)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (granularity !== undefined) {
            requestContext.setQueryParam("granularity", ObjectSerializer.serialize(granularity, "string", ""));
        }

        // Query Params
        if (period !== undefined) {
            requestContext.setQueryParam("period", ObjectSerializer.serialize(period, "string", ""));
        }

        // Query Params
        if (start !== undefined) {
            requestContext.setQueryParam("start", ObjectSerializer.serialize(start, "Date", "date-time"));
        }

        // Query Params
        if (end !== undefined) {
            requestContext.setQueryParam("end", ObjectSerializer.serialize(end, "Date", "date-time"));
        }

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }

        // Query Params
        if (metrics !== undefined) {
            requestContext.setQueryParam("metrics", ObjectSerializer.serialize(metrics, "Set<'INDEX_SIZE_ON_DISK' | 'NUMBER_OF_DELETES' | 'NUMBER_OF_ERROR_QUERIES' | 'NUMBER_OF_GETMORE_COMMANDS' | 'NUMBER_OF_INDEX_FIELDS' | 'NUMBER_OF_INSERTS' | 'NUMBER_OF_SUCCESS_QUERIES' | 'NUMBER_OF_UPDATES' | 'REPLICATION_LAG' | 'TOTAL_NUMBER_OF_QUERIES'>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Return all Atlas Search metric types available for one process in the specified project.
     * Return All Atlas Search Metric Types for One Process
     * @param processId Combination of hostname and IANA port that serves the MongoDB process. The host must be the hostname, fully qualified domain name (FQDN), or Internet Protocol address (IPv4 or IPv6) of the host that runs the MongoDB process (mongod or mongos). The port must be the IANA port on which the MongoDB process listens for requests.
     * @param groupId Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.  **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
     * @param envelope Flag that indicates whether Application wraps the response in an &#x60;envelope&#x60; JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope&#x3D;true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
     */
    public async listMetricTypes(processId: string, groupId: string, envelope?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'processId' is not null or undefined
        if (processId === null || processId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listMetricTypes", "processId");
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("MonitoringAndLogsApi", "listMetricTypes", "groupId");
        }



        // Path Params
        const localVarPath = '/api/atlas/v2/groups/{groupId}/hosts/{processId}/fts/metrics'
            .replace('{' + 'processId' + '}', encodeURIComponent(String(processId)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (envelope !== undefined) {
            requestContext.setQueryParam("envelope", ObjectSerializer.serialize(envelope, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["DigestAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MonitoringAndLogsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAtlasProcess
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAtlasProcess(response: ResponseContext): Promise<ApiHostViewAtlas > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiHostViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiHostViewAtlas", ""
            ) as ApiHostViewAtlas;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiHostViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiHostViewAtlas", ""
            ) as ApiHostViewAtlas;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabase
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabase(response: ResponseContext): Promise<ApiDatabaseView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiDatabaseView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiDatabaseView", ""
            ) as ApiDatabaseView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiDatabaseView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiDatabaseView", ""
            ) as ApiDatabaseView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDatabaseMeasurements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDatabaseMeasurements(response: ResponseContext): Promise<ApiMeasurementsGeneralViewAtlas > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMeasurementsGeneralViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsGeneralViewAtlas", ""
            ) as ApiMeasurementsGeneralViewAtlas;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMeasurementsGeneralViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsGeneralViewAtlas", ""
            ) as ApiMeasurementsGeneralViewAtlas;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDiskMeasurements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDiskMeasurements(response: ResponseContext): Promise<ApiMeasurementsGeneralViewAtlas > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMeasurementsGeneralViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsGeneralViewAtlas", ""
            ) as ApiMeasurementsGeneralViewAtlas;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMeasurementsGeneralViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsGeneralViewAtlas", ""
            ) as ApiMeasurementsGeneralViewAtlas;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHostLogs(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", "binary"
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", "binary"
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", "binary"
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Forbidden", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", "binary"
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", "binary"
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Conflict", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", "binary"
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHostMeasurements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHostMeasurements(response: ResponseContext): Promise<ApiMeasurementsGeneralViewAtlas > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMeasurementsGeneralViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsGeneralViewAtlas", ""
            ) as ApiMeasurementsGeneralViewAtlas;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMeasurementsGeneralViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsGeneralViewAtlas", ""
            ) as ApiMeasurementsGeneralViewAtlas;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIndexMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIndexMetrics(response: ResponseContext): Promise<ApiMeasurementsIndexesView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMeasurementsIndexesView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsIndexesView", ""
            ) as ApiMeasurementsIndexesView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMeasurementsIndexesView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsIndexesView", ""
            ) as ApiMeasurementsIndexesView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMeasurements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMeasurements(response: ResponseContext): Promise<ApiMeasurementsNonIndexView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMeasurementsNonIndexView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsNonIndexView", ""
            ) as ApiMeasurementsNonIndexView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMeasurementsNonIndexView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsNonIndexView", ""
            ) as ApiMeasurementsNonIndexView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAtlasProcesses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAtlasProcesses(response: ResponseContext): Promise<PaginatedHostViewAtlas > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedHostViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedHostViewAtlas", ""
            ) as PaginatedHostViewAtlas;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginatedHostViewAtlas = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedHostViewAtlas", ""
            ) as PaginatedHostViewAtlas;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDatabases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDatabases(response: ResponseContext): Promise<PaginatedDatabaseView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedDatabaseView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedDatabaseView", ""
            ) as PaginatedDatabaseView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginatedDatabaseView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedDatabaseView", ""
            ) as PaginatedDatabaseView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDiskMeasurements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDiskMeasurements(response: ResponseContext): Promise<ApiDiskPartitionView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiDiskPartitionView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiDiskPartitionView", ""
            ) as ApiDiskPartitionView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiDiskPartitionView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiDiskPartitionView", ""
            ) as ApiDiskPartitionView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDiskPartitions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDiskPartitions(response: ResponseContext): Promise<PaginatedDiskPartitionView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedDiskPartitionView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedDiskPartitionView", ""
            ) as PaginatedDiskPartitionView;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PaginatedDiskPartitionView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedDiskPartitionView", ""
            ) as PaginatedDiskPartitionView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIndexMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listIndexMetrics(response: ResponseContext): Promise<ApiMeasurementsIndexesView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiMeasurementsIndexesView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsIndexesView", ""
            ) as ApiMeasurementsIndexesView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiMeasurementsIndexesView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiMeasurementsIndexesView", ""
            ) as ApiMeasurementsIndexesView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMetricTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMetricTypes(response: ResponseContext): Promise<ApiFTSMetricsView > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiFTSMetricsView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiFTSMetricsView", ""
            ) as ApiFTSMetricsView;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ApiError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiError", ""
            ) as ApiError;
            throw new ApiException<ApiError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiFTSMetricsView = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiFTSMetricsView", ""
            ) as ApiFTSMetricsView;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
