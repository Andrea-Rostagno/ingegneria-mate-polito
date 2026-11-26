---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Fredholm alternative", "teoria di Fredholm", "Fredholm theory", "perturbazione compatta dell'identità", "compact perturbation of the identity", "I − K"]
tags: [competenza, area/analisi]
---

# Alternativa di Fredholm

> Per $T=I-K$ con $K$ compatto vale ciò che vale per le matrici: iniettivo $\iff$ suriettivo, quindi o $Tx=y$ ha soluzione unica per ogni $y$, oppure $Tx=0$ ha soluzioni non nulle.

## Definizione / enunciato
Sia $H$ di Hilbert, $I=\mathrm{id}_H$. Un operatore $T=I-K$ con $K\in\mathcal K(H)$ è una **perturbazione compatta dell'identità** (Def. 11.23).
**Teor. 11.24.** Se $T$ è una perturbazione compatta dell'identità:
(i) $\operatorname{Im}T$ è chiusa, quindi $H=\operatorname{Ker}(T^*)\oplus\operatorname{Im}T$;
(ii) $\dim\operatorname{Ker}T=\dim\operatorname{Ker}(T^*)<\infty$.
**Cor. 11.25.** $T$ iniettivo $\iff$ suriettivo $\iff$ biiettivo $\iff$ isomorfismo.
**Cor. 11.26 (alternativa di Fredholm).** Si verifica uno e uno solo dei casi:
(a) $Tx=y$ ha un'unica soluzione $x\in H$ per ogni $y\in H$;
(b) $Tx=0$ ha almeno una soluzione $x\ne0$.

## Formule chiave
Chiusura dell'immagine: $\operatorname{Im}T=T((\operatorname{Ker}T)^\perp)$ e si dimostra per assurdo che
$$\delta=\inf\{\|Tx\|:\ x\in(\operatorname{Ker}T)^\perp,\ \|x\|=1\}>0,$$
estraendo con la compattezza di $K=I-T$ una sottosuccessione convergente. In generale vale solo $\dim\operatorname{Ker}T+\dim\operatorname{Im}T=\dim H$, e in dimensione infinita le equivalenze iniettivo/suriettivo falliscono (es. lo shift).

## Intuizione
La parte compatta è "quasi finito-dimensionale", e l'identità non altera il conto delle dimensioni: per questo si conserva l'alternativa del teorema di Rouché-Capelli per sistemi quadrati. In più, la risolubilità di $Tx=y$ si legge come $y\perp\operatorname{Ker}(T^*)$.

## Come si usa
Per equazioni del tipo $x-Kx=y$ (equazioni integrali con nucleo $L^2$): basta dimostrare l'unicità (che $Tx=0\Rightarrow x=0$) per avere esistenza per ogni dato e dipendenza continua. Applicata a $T-\lambda I=-\lambda(I-T/\lambda)$ con $T$ compatto e $\lambda\ne0$ dà che lo spettro non nullo di un compatto è fatto di autovalori.

## Nei corsi
- **Analisi funzionale** (triennale): §11.2 "Teoria di Fredholm" (Oss. 11.22, Def. 11.23, Teor. 11.24 con dimostrazione, Cor. 11.25-11.26). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 173-176); `triennale/ANNO 3/analisi funzionale/10_operatoricompatti_handout.pdf` (p. 6).
- **Equazioni alle derivate parziali** (triennale): Evans §6.2.3, applicata agli operatori ellittici. Aggiunto formale $L^*v=-\sum(a^{ij}v_{x_j})_{x_i}-\sum b^iv_{x_i}+(c-\sum b^i_{x_i})v$, forma aggiunta $B^*[v,u]=B[u,v]$. **Teor. 4 (secondo teorema di esistenza):** o ($\alpha$) per ogni $f\in L^2$ esiste un'unica soluzione debole di $Lu=f$, $u=0$ su $\partial U$; oppure ($\beta$) esiste una soluzione debole $u\not\equiv0$ dell'omogeneo; nel caso ($\beta$) $\dim N=\dim N^*<\infty$ e il problema ha soluzione se e solo se $(f,v)=0$ per ogni $v\in N^*$. Dimostrazione: con $\mu=\gamma$, $u=L_\gamma^{-1}(\gamma u+f)$ diventa $u-Ku=h$ con $K=\gamma L_\gamma^{-1}$ compatto su $L^2$ (Rellich-Kondrachov). **Teor. 5:** esiste $\Sigma\subset\mathbb R$ al più numerabile (spettro reale di $L$) tale che $Lu=\lambda u+f$ ha un'unica soluzione per ogni $f$ se e solo se $\lambda\notin\Sigma$; se infinito, $\Sigma=\{\lambda_k\}$ con $\lambda_k\to+\infty$. **Teor. 6:** per $\lambda\notin\Sigma$, $\|u\|_{L^2}\le C\|f\|_{L^2}$. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 302-307).

## Prerequisiti
- [[Operatore compatto]]: K = I − T è compatto
- [[Operatore aggiunto]]: decomposizione con Ker(T*)
- [[Teorema dell'isomorfismo di Banach]]: biiettivo implica isomorfismo
- [[Complemento ortogonale]]: H = Ker T ⊕ (Ker T)⊥
- [[Teorema di Rellich-Kondrachov]]: rende compatto l'operatore $K=\gamma L_\gamma^{-1}$ (Equazioni alle derivate parziali)
- [[Stime dell'energia per operatori ellittici]]: invertibilità di $L_\gamma$ (Equazioni alle derivate parziali)

## Porta a
- [[Spettro di un operatore compatto]]: σ(T) \ {0} fatto di autovalori

## Collegati
- [[Teorema di Rouché-Capelli]]: alternativa analoga per sistemi lineari quadrati
- [[Teorema della dimensione]]: in dimensione finita iniettivo equivale a suriettivo
