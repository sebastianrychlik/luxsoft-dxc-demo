package com.luxsoft.dxc.service;

import com.luxsoft.dxc.config.ApplicationProperties;
import com.luxsoft.dxc.dto.HealthResponse;
import org.springframework.stereotype.Service;

@Service
public class HealthService {

    private final ApplicationProperties applicationProperties;

    public HealthService(ApplicationProperties applicationProperties) {
        this.applicationProperties = applicationProperties;
    }

    public HealthResponse getHealth() {
        return new HealthResponse(
                "UP",
                "luxsoft-dxc-demo",
                applicationProperties.getVersion()
        );
    }
}
