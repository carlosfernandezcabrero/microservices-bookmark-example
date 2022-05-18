#!/bin/bash

export NAMESPACE=${NAMESPACE:-staging}

function kubernetes {
	sed 's|staging|'$NAMESPACE'|g' skaffold.yaml > skaffold-temporary.yaml
	skaffold run --tail -f skaffold-temporary.yaml
}

$@
