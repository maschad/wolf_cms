<?php

public function sendDataToCRM(){
	$_data = array();
	$values = $this->form->getDataValues();
	foreach($values['values'] as $group => $values){
		foreach($values as $key => $value){
			$_data[$key] = $value;
		}
	}
	$_data['form_id'] = $this->form->getFormName();
	$jsonData = json_encode($_data);
	$jsonData = base64_encode($jsonData);

	$url = 'http://website_form_data_2_crm_testumgebung.php?data='.$jsonData;

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	$result = curl_exec($ch);

	curl_close($ch);
}

?>