<?php

function etype_paywall_admin() {

    $form = [];

    $form['etype_paywall_limit'] = [
        '#type' => 'select',
        '#title' => t("Limit"),
        '#description' => t("Number of articles allowed."),
        '#options' => [
            4 => 4,
            8 => 8,
            10 => 10,
        ],
        '#default_value' => variable_get('etype_paywall_limit', 4),
    ];

    return system_settings_form($form);
}