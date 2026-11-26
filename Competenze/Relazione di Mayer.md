---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["Mayer's relation", "cp - cV = R", "rapporto dei calori specifici", "entalpia", "enthalpy", "gas monoatomico", "gas biatomico"]
tags: [competenza, area/fisica]
---

# Relazione di Mayer

> Per un gas ideale il calore specifico molare a pressione costante supera quello a volume costante esattamente della costante dei gas: $c_p-c_V=R$.

## Definizione / enunciato
In un'isobara infinitesima $dQ=nc_pdT$ e $dW=p\,dV$. Dal primo principio $nc_pdT=nc_VdT+p\,dV$; differenziando $pV=nRT$ a $p$ costante si ha $p\,dV=nR\,dT$, quindi
$$c_p-c_V=R.$$
Si definisce $\gamma=c_p/c_V$.
**Entalpia:** $H=U+pV$ dipende solo da $T$ nel gas ideale; nelle isocore $Q=\Delta U$, nelle isobare $Q=\Delta H$.

## Formule chiave
$$c_p-c_V=R,\qquad \gamma=\frac{c_p}{c_V}$$
Monoatomici (He, Ar): $c_V=\tfrac32R$, $c_p=\tfrac52R$, $\gamma=\tfrac53$. Biatomici (H$_2$, N$_2$, NO, CO): $c_V=\tfrac52R$, $c_p=\tfrac72R$, $\gamma=\tfrac75$.

## Intuizione
A pressione costante una parte del calore va in lavoro di espansione, quindi serve più calore per lo stesso $\Delta T$: il "di più" è $R$ per mole e per kelvin.

## Come si usa
Serve a ricavare l'equazione delle adiabatiche reversibili e a scegliere $c_V$, $c_p$ e $\gamma$ negli esercizi sui cicli.

## Nei corsi
- **Fisica 1** (triennale): lezione del 16/05/2022; dimostrazione richiesta all'orale. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Termodinamica/Termodinamica_Lezione2.pdf` (pp. 25-27, 49-50).

## Prerequisiti
- [[Energia interna di un gas ideale]]: dU = n cV dT anche nell'isobara
- [[Calorimetria]]: calori specifici molari

## Porta a
- [[Trasformazione adiabatica reversibile]]: si sostituisce R = cp - cV

## Collegati
- [[Equipartizione dell'energia]]: spiega i valori di cV per mono e biatomici
- [[Entalpia di reazione]]: stessa definizione H = U + pV
