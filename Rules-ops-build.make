.PHONY: ops-website-setup ops-website-serve

MARKDOWN_ROOT=src/ops-website/src/markdown/en-US/documents

COMPONENTS = ops-cli ops-fand ops-ledd ops-powerd ops-pmd ops-sysd ops-restd ops-cfgd ops-intfd ops-tempd ops-openvswitch ops-aaa-utils ops-arpmgrd ops-bufmond ops-config-yaml ops-dhcp-tftp ops-ft-framework ops-lacpd ops-lldpd ops-mgmt-intf ops-portd ops-quagga ops-utils ops-vland ops-vsi ops-webui

ops-website-setup: $(MARKDOWN_ROOT)/dev $(MARKDOWN_ROOT)/user $(foreach component,$(COMPONENTS),$(MARKDOWN_ROOT)/dev/$(component))

$(MARKDOWN_ROOT)/dev: $(BUILD_ROOT)/src/ops-docs
	$(V) cp -Rf $< $@
	$(V) rm -Rf $@/user

define make-component
$(MARKDOWN_ROOT)/dev/$(1): $(MARKDOWN_ROOT)/dev src/$(1)
	$(V) mkdir -p $(MARKDOWN_ROOT)/dev/$(1)
	$(V) if [ -f src/$(1)/DESIGN.md ] ; then \
	  cp -R src/$(1)/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	else \
	  if [ -f src/$(1)/ops/docs/DESIGN.md ] ; then \
	    cp -R src/$(1)/ops/docs/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	  else \
	    echo "# Placeholder page" > $(MARKDOWN_ROOT)/dev/$(1)/design.md ; \
	  fi \
	fi

src/$(1):
	$(V) $(MAKE) devenv_add $(1)

update-website-$(1): $(MARKDOWN_ROOT)/dev/$(1)
	$(V) $(ECHO) Updating $(1)...
	$(V) cd src/$(1) ; git pull || true
	$(V) if [ -f src/$(1)/DESIGN.md ] ; then \
	  cp -R src/$(1)/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	else \
	  if [ -f src/$(1)/ops/docs/DESIGN.md ] ; then \
	    cp -R src/$(1)/ops/docs/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	  else \
	    echo "# Placeholder page" > $(MARKDOWN_ROOT)/dev/$(1)/design.md ; \
	  fi \
	fi
endef

$(foreach component,$(COMPONENTS),$(eval $(call make-component,$(component))))

$(BUILD_ROOT)/src/ops-docs:
	$(V) git clone https://git.openswitch.net/openswitch/ops-docs $@

$(MARKDOWN_ROOT)/user: $(BUILD_ROOT)/src/ops
	$(V) cp -Rf $</docs $@

$(BUILD_ROOT)/src/ops:
	$(V)$(MAKE) devenv_add ops

ops-website-serve:
	$(V)cd src/ops-website/ ; PATH=$(STAGING_DIR_NATIVE)/usr/bin:$$PATH $(STAGING_DIR_NATIVE)/usr/bin/gulp dev

ops-website-dist:
	$(V)cd src/ops-website/ ; PATH=$(STAGING_DIR_NATIVE)/usr/bin:$$PATH $(STAGING_DIR_NATIVE)/usr/bin/gulp dist

ops-website-update:
	$(V)rm -Rf $(MARKDOWN_ROOT)/user $(MARKDOWN_ROOT)/dev
	$(V)cd $(BUILD_ROOT)/src/ops; git pull || true
	$(V)cd $(BUILD_ROOT)/src/ops-docs; git pull || true
	$(V)cd $(BUILD_ROOT)/src/ops-website; git pull || true
	$(V)$(MAKE) $(MARKDOWN_ROOT)/user $(MARKDOWN_ROOT)/dev
	$(V)$(MAKE) $(foreach component,$(COMPONENTS),update-website-$(component))
