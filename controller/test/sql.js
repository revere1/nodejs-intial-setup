module.exports = {
    GET_ALL_ATTRIBUTES: `SELECT 
    sa.id_system_attribute attributeId,
    sa.system_attribute_name systemAttributeName,
    sa.system_attribute_desc systemAttributeDesc
    FROM system_attribute sa`,

    GET_ATTRIBUTE_DETAILS: `   
SELECT  
sa.system_attribute_name systemAttributeName,
sa.system_attribute_desc systemAttributeDesc
FROM system_attribute sa WHERE sa.id_system_attribute = ?`,

    UPDATE_ATTRIBUTE_INFORMATION:
        'UPDATE system_attribute SET system_attribute_name=?,system_attribute_desc=?,modified_date=? WHERE id_system_attribute = ?',
    INSERT_GENERAL_INFORMATION:
        'INSERT INTO 8D_general_information SET id_general_information=?,id_8D=?,origin_type=?,id_location=?,id_division=?,id_department=?,id_originator_company=?,originator_ncr_ref=?,originator_name=?,originator_mail_id=?,id_responsible=?,target_closure_date=?,is_customer_originator=?,id_customer=?,id_customer_type=?,customer_claim_ref=?,customer_point_of_contact=?,customer_mail=?,id_origin_source=?,ncr_related_to=?,status=?,workflow_version=?,id_organisation=?,id_originator_type=?,created_by=?,created_date=?;'
};