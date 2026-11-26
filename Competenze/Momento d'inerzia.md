---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["moment of inertia", "momento di inerzia", "momento angolare assiale", "Lz = I omega", "momenti d'inerzia notevoli"]
tags: [competenza, area/fisica]
---

# Momento d'inerzia

> Grandezza che misura come la massa è distribuita rispetto a un asse di rotazione: nei moti rotatori gioca il ruolo che la massa ha nei moti lineari.

## Definizione / enunciato
La proiezione sull'asse $z$ del momento angolare di un corpo rigido che ruota con velocità angolare $\omega$ è
$$L_z=\sum_iL_{i,z}=\Big(\sum_i m_iR_i^2\Big)\omega=I_z\omega,\qquad I_z=\sum_i m_iR_i^2=\sum_i m_i(x_i^2+y_i^2),$$
con $R_i$ distanza del punto dall'asse; per un corpo continuo $I_z=\int R^2\,dm$. Dipende da masse, forma del corpo e posizione dell'asse. Se l'asse di rotazione è asse di simmetria, $\vec L$ è parallelo a $\vec\omega$.

## Formule chiave
Valori notevoli (tabella p. 15): anello $I=MR^2$; cilindro anulare $\tfrac12M(R_1^2+R_2^2)$; cilindro pieno (disco) rispetto all'asse $\tfrac12MR^2$; barra sottile rispetto al centro $\tfrac1{12}ML^2$; sfera piena $\tfrac25MR^2$; sfera cava $\tfrac23MR^2$; anello rispetto a un diametro $\tfrac12MR^2$; lastra $\tfrac1{12}M(a^2+b^2)$.

## Intuizione
Più massa lontana dall'asse significa più "inerzia rotazionale": a parità di momento applicato il corpo accelera angolarmente di meno.

## Come si usa
Si calcola integrando (es. parallelepipedo di lati $a,b,c$ attorno a un asse per il CM, p. 14) oppure si usa la tabella e il teorema di Huygens-Steiner. Il momento d'inerzia è additivo: cornice di sbarrette $I_{tot}=I_1+2I_2+I_3$ (`Corporigido_Lezione4.pdf` p. 7).

## Nei corsi
- **Fisica 1** (triennale): lezione del 27/04/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione2.pdf` (pp. 2-15); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/CorpoRigido_Lezione1.pdf` (pp. 79-81). Tabella riassuntiva anche in `triennale/ANNO 1/fisica 1/Appunti, riassunti e formulari/Lista principali momenti d'inerzia.pdf`.
- **Meccanica** (triennale): momento rispetto a un asse obliquo $I_u=\hat u^TI_O\hat u$, tramite la matrice d'inerzia e i prodotti d'inerzia; per un sistema piano $I_z=I_x+I_y$. Ex6: quadrato di lato $3l$ con un angolo tagliato, rispetto all'asse per $A$ a 45°: $I^{(A)}_{figura}=I^{(A)}_{pieno}-I^{(A)}_{foro}=\frac{189}4ml^2-\frac{151}{12}ml^2=\frac{104}3ml^2$ (4.31). Fonti: `triennale/ANNO 2/Meccanica/Lect3-GeometryOfMasses.pdf` (pp. 38-43, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (pp. 63-76).

## Prerequisiti
- [[Corpo rigido]]: distribuzione rigida di masse attorno all'asse
- [[Momento angolare]]: proiezione sull'asse di rotazione

## Porta a
- [[Teorema di Huygens-Steiner]]: lo si trasporta su un asse parallelo
- [[Rotazione attorno a un asse fisso]]: Lz = I ω
- [[Rotore rigido quantistico]]: energia classica L²/2I

## Collegati
- Nessuno.
